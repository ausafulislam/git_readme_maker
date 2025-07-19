import { GoogleGenerativeAI } from '@google/generative-ai';
import { Octokit } from 'octokit';

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY || '');

export type RepoAnalysisType = {
    name: string;
    description: string;
    languages: Record<string, number>;
    structure: string[];
    packageJson?: {
        dependencies?: Record<string, string>;
    };
    license?: string;
    stars: number;
    forks: number;
    issues: number;
    contributors: string[];
};

export async function analyzeRepository(repoUrl: string): Promise<RepoAnalysisType> {
    // Extract owner and repo name from URL
    const matches = repoUrl.match(/github\.com\/([^/]+)\/([^/]+)/);
    if (!matches) throw new Error('Invalid GitHub repository URL');

    const [_, owner, repo] = matches;

    const octokit = new Octokit({
        auth: process.env.NEXT_PUBLIC_GITHUB_TOKEN || '',
        userAgent: 'README Generator/v1.0.0'
    });

    // Get repo details
    const { data: repoData } = await octokit.rest.repos.get({
        owner,
        repo
    });

    // Get languages
    const { data: languages } = await octokit.rest.repos.listLanguages({
        owner,
        repo
    });

    // Get contents of root directory
    const { data: contents } = await octokit.rest.repos.getContent({
        owner,
        repo,
        path: ''
    });

    const structure = Array.isArray(contents)
        ? contents.map(item => item.name)
        : [];

    // Get package.json if exists
    let packageJson = null;
    if (structure.includes('package.json')) {
        try {
            const { data: packageJsonContent } = await octokit.rest.repos.getContent({
                owner,
                repo,
                path: 'package.json'
            });

            if ('content' in packageJsonContent) {
                packageJson = JSON.parse(Buffer.from(packageJsonContent.content, 'base64').toString());
            }
        } catch (error) {
            console.error('Error reading package.json:', error);
        }
    }

    // Get contributors
    const { data: contributors } = await octokit.rest.repos.listContributors({
        owner,
        repo
    });

    return {
        name: repoData.name,
        description: repoData.description || '',
        languages,
        structure,
        packageJson,
        license: repoData.license?.name,
        stars: repoData.stargazers_count,
        forks: repoData.forks_count,
        issues: repoData.open_issues_count,
        contributors: contributors.map(c => c.login).filter((login): login is string => login !== undefined).slice(0, 10)
    };
}

export async function generateReadme(analysis: RepoAnalysisType): Promise<string> {
    const model = genAI.getGenerativeModel({
        model: "gemini-2.5-flash",
        generationConfig: {
            temperature: 0.7,
            topP: 0.9,
            topK: 40,
            maxOutputTokens: 4000
        }
    });

    const readmeGeneratorPrompt = `
📝 **Professional README.md Generator**

Create a **high-quality, well-structured README.md** for a GitHub repository with the following specifications:

=== 🏷️ REPOSITORY METADATA ===
- **Repository Name:** ${analysis.name}
- **Description:** ${analysis.description}
- **Primary Language(s):** ${Object.keys(analysis.languages).join(', ')}
- **Project Structure:** ${analysis.structure.join(', ')}
${analysis.packageJson ? `- **Key Dependencies:** ${Object.keys(analysis.packageJson.dependencies || {}).join(', ')}` : ''}
- **License:** ${analysis.license || 'None'}
- **Stars:** ${analysis.stars}
- **Forks:** ${analysis.forks}
- **Main Contributors:** ${analysis.contributors.join(', ')}

=== � README STRUCTURE REQUIREMENTS ===

1. **HEADER SECTION**
   - Eye-catching title with relevant emoji (H1)
   - Clear, one-sentence project tagline
   - Badge row (horizontal layout) including:
     * Version badge
     * License badge
     * GitHub stars
     * GitHub forks
     * Any other relevant badges
   - Example: ![Version](https://img.shields.io/badge/version-1.0.0-blue) ![License](https://img.shields.io/badge/license-MIT-green)
   - Preview Image: Project preview image/screenshot (use \`![example-preview-image](/preview_example.png)\` placeholder if none available)

2. **FEATURES SECTION**
   - 3-5 key features as bullet points
   - Each with descriptive emoji
   - Clear, benefit-focused language
   - Example:
     * ✨ Feature one description
     * 🚀 Feature two description

3. **INSTALLATION GUIDE**
   - Step-by-step instructions for all setup methods
   - Proper code blocks with syntax highlighting
   - Include:
     * Package manager commands (npm/yarn/etc)
     * Manual installation steps if applicable
     * Environment configuration if needed

4. **USAGE EXAMPLES**
   - Basic usage code snippet
   - Configuration options table if applicable
   - Screenshot placeholder if UI exists
   - Example with common use cases

5. **PROJECT ROADMAP**
   - Upcoming features/goals
   - Planned improvements
   - Version milestones if available

6. **CONTRIBUTION GUIDELINES**
   - Code style requirements
   - Branch naming conventions
   - PR process description
   - Testing requirements

7. **LICENSE INFORMATION**
   - Full license name with link
   - Copyright notice if applicable
   - Usage restrictions if any

=== ✨ QUALITY REQUIREMENTS ===
- Professional but approachable tone
- Consistent heading hierarchy (##, ###)
- All code in proper fenced blocks with language
- Badges using correct Markdown image syntax
- Balanced emoji usage (not excessive)
- Mobile-responsive layout
- Clear section separation
- All placeholders marked as \`[preview-image]\` or \`[placeholder]\`

=== 🛠️ BADGE TEMPLATES ===
Use these dynamic badge templates:
- Version: \`![Version](https://img.shields.io/badge/version-${analysis.forks || '1.0.0'}-blue)\`
- License: \`![License](https://img.shields.io/badge/license-${analysis.license || 'MIT'}-green)\`
- Stars: \`![Stars](https://img.shields.io/github/stars/${analysis.name}?style=social)\`

=== 🎯 TASK ===
Generate a complete, production-ready README.md using all provided information. Ensure:
1. Perfect Markdown formatting
2. All sections are properly organized
3. Professional presentation
4. Mobile-friendly layout
5. All dynamic values properly inserted

### 🎨 Markdown Formatting Rules
- Use proper headings (\`##\`, \`###\`)
- All code inside \`\`\` with correct language
- Badges formatted with Markdown image syntax
- Keep tone professional but friendly
- Use emojis for clarity, not overload
- Placeholder images = \`[preview-image]\`
- Don't use markdown word 
- Don't use extra \`\`\`

### 🏷️ Badge Examples
- Version: ![Version](https://img.shields.io/badge/version-1.0.0-blue)
- License: ![License](https://img.shields.io/badge/license-${analysis.license || 'MIT'}-green)
- Stars: ![Stars](https://img.shields.io/github/stars/${analysis.name.split('/')[0]}/${analysis.name.split('/')[1]}?style=social)

🎯 Generate the full **README.md** using the details above. Format it perfectly in Markdown.
`;


    try {
        const result = await model.generateContent(readmeGeneratorPrompt);
        const response = await result.response;

        // Post-process the response for consistency
        let readme = response.text();

        // Ensure proper header formatting
        if (!readme.startsWith('# ')) {
            readme = `# ${analysis.name}\n\n${readme}`;
        }

        // Add divider between sections if missing
        readme = readme.replace(/\n## /g, '\n\n## ');

        return readme;
    } catch (error) {
        console.error('Error generating README:', error);
        throw new Error('Failed to generate README. Please try again.');
    }
}