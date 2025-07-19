import type { RepoAnalysisType } from "@/lib/github";
import { Button } from "./ui/button";

interface RepoAnalysisProps {
    data: RepoAnalysisType;
}

export function RepoAnalysis({ data }: RepoAnalysisProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <h3 className="text-xl font-medium mb-2">Basic Info</h3>
                <div className="space-y-2">
                    <p><span className="font-semibold">Name:</span> {data.name}</p>
                    <p><span className="font-semibold">Description:</span> {data.description || 'None'}</p>
                    <p><span className="font-semibold">License:</span> {data.license || 'None'}</p>
                    <p><span className="font-semibold">Stars:</span> {data.stars}</p>
                    <p><span className="font-semibold">Forks:</span> {data.forks}</p>
                    <p><span className="font-semibold">Open Issues:</span> {data.issues}</p>
                </div>
            </div>

            <div>
                <h3 className="text-xl font-medium mb-2">Languages</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                    {Object.entries(data.languages).map(([lang]) => (
                        <Button
                            key={lang}
                            variant="outline"
                            className="border-2 rounded-full border-black bg-purple-400 hover:bg-purple-400 text-sm text-black sm:text-base"
                        >
                            {lang}
                        </Button>
                    ))}
                </div>

                <h3 className="text-xl font-medium mb-2">Top Contributors</h3>
                <div className="flex flex-wrap gap-2">
                    {data.contributors.map(contributor => (
                        <Button
                            key={contributor}
                            variant="outline"
                            className="border-2 rounded-full border-black bg-purple-400 hover:bg-purple-400 text-sm text-black sm:text-base"
                        >
                            {contributor}
                        </Button>
                    ))}
                </div>
            </div>

            {data.packageJson && (
                <div className="md:col-span-2">
                    <h3 className="text-xl font-medium mb-2">Dependencies</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {Object.keys(data.packageJson.dependencies || {}).map(dep => (
                            <Button
                                key={dep}
                                variant="outline"
                                className="min-h-10 border-2 rounded-full border-black bg-purple-400 hover:bg-purple-400 text-sm text-black sm:text-base whitespace-normal break-words h-auto px-3 py-2"
                            >
                                {dep}
                            </Button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}