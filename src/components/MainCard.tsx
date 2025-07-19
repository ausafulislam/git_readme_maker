"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Sparkles, ChevronUp, ChevronDown, Download, Eye, Code } from "lucide-react";
import { exampleRepos } from "../lib/exampleRepos";
import { analyzeRepository, generateReadme, RepoAnalysisType } from "../lib/github";
import { ReadmePreview } from "@/components/ReadmePreview";
import { RepoAnalysis } from "@/components/RepoAnalysis";
import Loading from "@/components/Loading";

interface MainCardProps {
    isHome?: boolean;
    username?: string;
    repo?: string;
    showCustomization?: boolean;
    onModify?: (instructions: string) => void;
    onRegenerate?: (instructions: string) => void;
    onCopy?: () => void;
    lastGenerated?: Date;
    onExportImage?: () => void;
    zoomingEnabled?: boolean;
    onZoomToggle?: () => void;
    loading?: boolean;
}

export default function MainCard({
    isHome = true,
    showCustomization,
    onModify,
    onRegenerate,
    lastGenerated,
    loading,
}: MainCardProps) {
    const [repoUrl, setRepoUrl] = useState("");
    const [error, setError] = useState("");
    const [activeDropdown, setActiveDropdown] = useState<"customize" | "export" | null>(null);
    const [readmeContent, setReadmeContent] = useState("");
    const [repoData, setRepoData] = useState<RepoAnalysisType | null>(null);
    const [activeTab, setActiveTab] = useState("preview");
    const [isGenerating, setIsGenerating] = useState(false);
    const [currentLoadingState, setCurrentLoadingState] = useState<"analyzing" | "generating" | null>(null);

    useEffect(() => {
        if (loading) {
            setActiveDropdown(null);
        }
    }, [loading]);

    const handleSubmit = async (e?: React.FormEvent) => {
        if (e) e.preventDefault();
        setError("");
        setRepoData(null);
        setReadmeContent("");

        if (!repoUrl) return;

        setIsGenerating(true);
        try {
            setCurrentLoadingState("analyzing");
            const analysis = await analyzeRepository(repoUrl);
            setRepoData(analysis);

            setCurrentLoadingState("generating");
            const generatedReadme = await generateReadme(analysis);
            setReadmeContent(generatedReadme);
        } catch (error) {
            console.error('Error:', error);
            setError('Failed to generate README. Please check the repository URL.');
        } finally {
            setIsGenerating(false);
            setCurrentLoadingState(null);
        }
    };

    const handleExampleClick = (repoPath: string, e: React.MouseEvent) => {
        e.preventDefault();
        setRepoUrl(repoPath);
        // Auto-submit after a small delay to allow state to update
        setTimeout(() => {
            handleSubmit();
        }, 100);
    };

    const handleDropdownToggle = (dropdown: "customize" | "export") => {
        setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
    };

    return (
        <div className="space-y-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
            >
                <Card className="relative w-full max-w-3xl border-[3px] border-black bg-gradient-to-br from-purple-200 to-purple-300 p-6 shadow-[8px_8px_0_0_#000000] transition-all hover:shadow-[10px_10px_0_0_#000000] sm:p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="flex flex-col gap-4 sm:flex-row sm:gap-4">
                            <Input
                                placeholder="https://github.com/username/repo"
                                className="flex-1 rounded-md border-[3px] border-black px-4 py-5 text-base font-bold shadow-[4px_4px_0_0_#000000] transition-all hover:shadow-[6px_6px_0_0_#000000] focus:outline-none  focus:border-none placeholder:text-base placeholder:font-normal placeholder:text-gray-700 sm:text-lg sm:placeholder:text-lg"
                                value={repoUrl}
                                onChange={(e) => setRepoUrl(e.target.value)}
                                required
                            />
                            <Button
                                type="submit"
                                disabled={isGenerating}
                                className="group border-[3px] border-black bg-purple-500 p-5 px-6 text-base font-bold text-black shadow-[4px_4px_0_0_#000000] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-purple-600 hover:shadow-[6px_6px_0_0_#000000] sm:text-lg"
                            >
                                {isGenerating ? (
                                    <span className="flex items-center gap-2">
                                        <motion.span
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                            className="inline-block"
                                        >
                                            ⚙️
                                        </motion.span>
                                        Generating...
                                    </span>
                                ) : (
                                    <span className="flex items-center gap-2">
                                        <Sparkles className="h-4 w-4 group-hover:scale-110 transition-transform" />
                                        Generate Now!
                                    </span>
                                )}
                            </Button>
                        </div>

                        {error && (
                            <motion.p
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-sm font-medium text-red-600"
                            >
                                {error}
                            </motion.p>
                        )}

                        {!isHome && (
                            <div className="space-y-4">
                                {!loading && (
                                    <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-4">
                                        {showCustomization && onModify && onRegenerate && lastGenerated && (
                                            <motion.button
                                                whileHover={{ scale: 1.03 }}
                                                whileTap={{ scale: 0.98 }}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    handleDropdownToggle("customize");
                                                }}
                                                className={`flex w-full items-center justify-between gap-2 rounded-md border-[3px] border-black px-4 py-3 font-medium text-black transition-all sm:max-w-[250px] ${activeDropdown === "customize"
                                                    ? "bg-purple-400 shadow-[4px_4px_0_0_#000000]"
                                                    : "bg-purple-300 shadow-[4px_4px_0_0_#000000] hover:bg-purple-400 hover:shadow-[6px_6px_0_0_#000000]"
                                                    }`}
                                            >
                                                <span>Customize Diagram</span>
                                                {activeDropdown === "customize" ? (
                                                    <ChevronUp size={20} />
                                                ) : (
                                                    <ChevronDown size={20} />
                                                )}
                                            </motion.button>
                                        )}
                                    </div>
                                )}
                            </div>
                        )}
                    </form>

                    {/* Example Repositories */}
                    {isHome && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="mt-6 space-y-3"
                        >
                            <p className="text-sm font-medium text-gray-700 sm:text-base">
                                Try these example repositories:
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {Object.entries(exampleRepos).map(([name, path]) => (
                                    <motion.div
                                        key={name}
                                        whileHover={{ y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Button
                                            variant="outline"
                                            className="group border-2 border-black bg-purple-400 text-sm font-medium text-black transition-all hover:bg-purple-300 hover:shadow-[4px_4px_0_0_#000000] sm:text-base"
                                            onClick={(e) => handleExampleClick(path, e)}
                                        >
                                            <span className="group-hover:underline">{name}</span>
                                        </Button>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* Decorative Sparkle */}
                    <motion.div
                        className="absolute -bottom-8 -left-12 hidden sm:block"
                        animate={{
                            rotate: [0, 5, -5, 0],
                            y: [0, -5, 5, 0]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <Sparkles
                            className="h-20 w-20 fill-sky-400 text-black"
                            strokeWidth={0.6}
                        />
                    </motion.div>
                </Card>
            </motion.div>

            {/* Loading State */}
            <AnimatePresence>
                {currentLoadingState && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Card className="w-full max-w-3xl border-[3px] border-black bg-gradient-to-br from-purple-200 to-purple-300 p-8 shadow-[8px_8px_0_0_#000000]">
                            <div className="flex flex-col items-center justify-center">
                                <Loading status={currentLoadingState} />
                                <motion.p
                                    className="mt-4 text-lg font-semibold"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    {currentLoadingState === "analyzing"
                                        ? "Analyzing repository structure..."
                                        : "Generating beautiful README..."}
                                </motion.p>
                                <motion.p
                                    className="mt-2 text-sm text-gray-600"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.6 }}
                                >
                                    This usually takes 10-30 seconds...
                                </motion.p>
                            </div>
                        </Card>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Results Section */}
            <AnimatePresence>
                {repoData && !currentLoadingState && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <Card className="w-full max-w-3xl border-[3px] border-black bg-gradient-to-br from-purple-200 to-purple-300 p-6 shadow-[8px_8px_0_0_#000000] sm:p-8">
                            <h2 className="mb-4 text-2xl font-bold">Repository Analysis</h2>
                            <RepoAnalysis data={repoData} />
                        </Card>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {readmeContent && !currentLoadingState && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                    >
                        <Card className="w-full max-w-3xl border-[3px] border-black bg-gradient-to-br from-purple-200 to-purple-300 p-6 shadow-[8px_8px_0_0_#000000] sm:p-8">
                            <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center sm:gap-0">
                                <h2 className="text-2xl font-bold">README Preview</h2>
                                <div className="flex flex-wrap gap-2">
                                    <Button
                                        onClick={() => setActiveTab('preview')}
                                        variant={activeTab === 'preview' ? 'default' : 'outline'}
                                        className="flex items-center gap-2 border-2 border-black font-medium"
                                    >
                                        <Eye className="h-4 w-4" /> Preview
                                    </Button>
                                    <Button
                                        onClick={() => setActiveTab('markdown')}
                                        variant={activeTab === 'markdown' ? 'default' : 'outline'}
                                        className="flex items-center gap-2 border-2 border-black font-medium"
                                    >
                                        <Code className="h-4 w-4" /> Markdown
                                    </Button>
                                    <a
                                        href={`data:text/markdown;charset=utf-8,${encodeURIComponent(readmeContent)}`}
                                        download="README.md"
                                        className="flex items-center gap-2 rounded-lg border-2 border-black bg-green-600 px-4 py-2 font-medium text-white transition-all hover:bg-green-700 hover:shadow-[4px_4px_0_0_#000000]"
                                    >
                                        <Download className="h-4 w-4" /> Download
                                    </a>
                                </div>
                            </div>

                            <div className="overflow-hidden rounded-lg border-2 p-4 border-black bg-white shadow-sm">
                                {activeTab === 'preview' ? (
                                    <ReadmePreview content={readmeContent} />
                                ) : (
                                    <pre className="max-h-[600px] overflow-auto whitespace-pre-wrap font-mono text-gray-800">
                                        {readmeContent}
                                    </pre>
                                )}
                            </div>
                        </Card>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}