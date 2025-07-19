"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card"; // adjust if needed

export function DialogButton() {
    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <span className="text-lg font-medium cursor-pointer text-gray-900 transition-all hover:text-purple-600 hover:-translate-y-0.5 px-2 py-1">Disclaimer</span>
            </Dialog.Trigger>

            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50" />

                <Dialog.Content className="fixed z-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl p-0 focus:outline-none">
                    <Card className="relative w-full max-w-3xl border-[3px] border-black bg-gradient-to-br from-purple-200 to-purple-300 p-6 shadow-[8px_8px_0_0_#000000] transition-all hover:shadow-[10px_10px_0_0_#000000] sm:p-8">

                        <div className="flex justify-between items-center mb-4">
                            <Dialog.Title className="text-xl font-bold text-black">⚠️ Important Note</Dialog.Title>
                            <Dialog.Close asChild>
                                <button className="text-black hover:text-red-600 transition">
                                    <X size={20} />
                                </button>
                            </Dialog.Close>
                        </div>

                        <div className="space-y-4 text-gray-800 text-sm sm:text-base leading-relaxed">
                            <p>
                                This project is an <strong>AI-powered README Generator</strong> designed to automatically create professional-quality README files based on your GitHub repository.
                            </p>

                            <p>
                                While the AI aims to provide accurate and high-quality content, <strong>mistakes or missing details may occur</strong>. If the generated README doesn't meet your expectations or misses key information:
                            </p>

                            <ul className="list-disc pl-5">
                                <li><strong>Regenerate</strong> it once or twice — the output often improves with each attempt.</li>
                            </ul>

                            <p>
                                Once a suitable version is generated, we <strong>strongly recommend reviewing</strong> the content carefully before using it in your project. You can edit any section as needed to ensure it fully represents your work.
                            </p>

                            <p className="font-semibold text-black">
                                Your review ensures both accuracy and professionalism in your final README. ✅
                            </p>
                        </div>

                        <div className="mt-6 text-right">
                            <Dialog.Close asChild>
                                <Button className="bg-black hover:bg-gray-900 text-white">Got it</Button>
                            </Dialog.Close>
                        </div>
                    </Card>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}
