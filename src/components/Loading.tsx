"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import { FaGithub, FaCode, FaBook, FaTasks, FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";
import { RiRobot2Line } from "react-icons/ri";

const messages = [
    { text: "Analyzing repository structure...", icon: <FaGithub className="text-blue-500" /> },
    { text: "Identifying project dependencies...", icon: <FaCode className="text-purple-500" /> },
    { text: "Reading package.json...", icon: <FaBook className="text-yellow-500" /> },
    { text: "Extracting key project information...", icon: <FaTasks className="text-green-500" /> },
    { text: "Understanding project architecture...", icon: <RiRobot2Line className="text-pink-500" /> },
    { text: "Generating README sections...", icon: <FaCode className="text-blue-400" /> },
    { text: "Writing project description...", icon: <FaBook className="text-purple-400" /> },
    { text: "Creating installation instructions...", icon: <FaTasks className="text-green-400" /> },
    { text: "Documenting usage examples...", icon: <RiRobot2Line className="text-pink-400" /> },
    { text: "Adding contribution guidelines...", icon: <FaGithub className="text-blue-300" /> },
    { text: "Formatting README content...", icon: <FaCode className="text-purple-300" /> },
    { text: "Finalizing markdown formatting...", icon: <FaBook className="text-yellow-300" /> },
    { text: "Applying finishing touches...", icon: <FaTasks className="text-green-300" /> },
    { text: "Your professional README is on its way!", icon: <RiRobot2Line className="text-pink-300" /> },
];

const funFacts = [
    "🌟 Projects with great READMEs get 3x more contributors",
    "📊 Clear installation instructions reduce support requests by 60%",
    "🛠️ Developers spend 5x more time on well-documented projects",
    "🚀 Badges in READMEs increase perceived project reliability",
    "💡 Emojis improve readability when used sparingly",
    "⏱️ The average developer spends 5 minutes reading a README",
    "📈 Good documentation can increase adoption by 40%",
];

const tips = [
    "Pro Tip: Include screenshots in your README for better engagement",
    "Pro Tip: Keep your installation instructions simple and clear",
    "Pro Tip: Use badges to show build status and test coverage",
    "Pro Tip: Structure your README with clear section headers",
    "Pro Tip: Document both simple and advanced usage examples",
];

interface LoadingProps {
    status: "idle" | "analyzing" | "generating" | "complete" | "error";
    repoData?: string;
    readmeContent?: string;
    progress?: number;
}

export default function Loading({
    status = "idle",
    repoData,
    readmeContent,
    progress = 0,
}: LoadingProps) {
    const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
    const [currentFactIndex, setCurrentFactIndex] = useState(0);
    const [currentTipIndex, setCurrentTipIndex] = useState(0);
    const scrollRef = useRef<HTMLDivElement>(null);
    const progressMotionValue = useMotionValue(0);

    // Update progress motion value when prop changes
    useEffect(() => {
        progressMotionValue.set(progress);
    }, [progress, progressMotionValue]);

    // Rotate through messages
    useEffect(() => {
        const messageInterval = setInterval(() => {
            setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
        }, 2000);

        return () => clearInterval(messageInterval);
    }, []);

    // Rotate through fun facts and tips
    useEffect(() => {
        const factInterval = setInterval(() => {
            setCurrentFactIndex((prev) => (prev + 1) % funFacts.length);
            setCurrentTipIndex((prev) => (prev + 1) % tips.length);
        }, 4000);

        return () => clearInterval(factInterval);
    }, []);

    // Auto-scroll effect
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [repoData, readmeContent]);

    const getStatusDisplay = () => {
        switch (status) {
            case "analyzing":
                return {
                    text: "Analyzing Repository",
                    icon: <FaGithub className="text-blue-500 text-2xl" />,
                    color: "bg-blue-400",
                    borderColor: "border-blue-400",
                    step: "Step 1/2",
                };
            case "generating":
                return {
                    text: "Generating README",
                    icon: <FaCode className="text-purple-500 text-2xl" />,
                    color: "bg-purple-400",
                    borderColor: "border-purple-400",
                    step: "Step 2/2",
                };
            case "complete":
                return {
                    text: "README Generated!",
                    icon: <FaCheckCircle className="text-green-500 text-2xl" />,
                    color: "bg-green-400",
                    borderColor: "border-green-400",
                    step: "Complete",
                };
            case "error":
                return {
                    text: "Error Occurred",
                    icon: <FaExclamationTriangle className="text-red-500 text-2xl" />,
                    color: "bg-red-400",
                    borderColor: "border-red-400",
                    step: "Error",
                };
            default:
                return {
                    text: messages[currentMessageIndex].text,
                    icon: messages[currentMessageIndex].icon,
                    color: "bg-yellow-400",
                    borderColor: "border-yellow-400",
                    step: "Preparing",
                };
        }
    };

    const statusDisplay = getStatusDisplay();

    return (
        <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.4, type: "spring" }}
            className="w-full max-w-3xl rounded-xl border-[3px] border-black bg-gradient-to-br from-purple-100 to-purple-200 p-6 shadow-[8px_8px_0_0_#000000] hover:shadow-[10px_10px_0_0_#000000] transition-all"
        >
            {/* Header with status */}
            <div className="mb-4 flex items-center justify-between border-b-2 border-black pb-4">
                <div className="flex items-center gap-3">
                    <motion.div
                        key={status}
                        initial={{ scale: 0.8, rotate: -10 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring" }}
                        className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-black bg-white"
                    >
                        {statusDisplay.icon}
                    </motion.div>
                    <div>
                        <h2 className="text-xl font-bold">{statusDisplay.text}</h2>
                        <AnimatePresence mode="wait">
                            <motion.p
                                key={currentMessageIndex}
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -5 }}
                                transition={{ duration: 0.3 }}
                                className="text-sm text-gray-700"
                            >
                                {messages[currentMessageIndex].text}
                            </motion.p>
                        </AnimatePresence>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <span
                        className={`rounded-full border-2 border-black ${statusDisplay.color} px-3 py-1 text-sm font-bold`}
                    >
                        {statusDisplay.step}
                    </span>
                </div>
            </div>



            {/* Content area */}
            <div
                ref={scrollRef}
                className="max-h-[300px] overflow-y-auto scrollbar-thin"
            >
                <div className="flex flex-col gap-4">
                    {/* Analysis or README preview */}
                    <AnimatePresence mode="wait">
                        {status === "analyzing" && repoData && (
                            <motion.div
                                key="analysis"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                className="rounded-lg border-2 border-black bg-white p-4"
                            >
                                <h3 className="mb-2 flex items-center gap-2 font-bold text-blue-600">
                                    <FaGithub /> Repository Analysis
                                </h3>
                                <div className="overflow-x-auto">
                                    <pre className="text-xs">
                                        {JSON.stringify(repoData, null, 2)}
                                    </pre>
                                </div>
                            </motion.div>
                        )}

                        {status === "generating" && readmeContent && (
                            <motion.div
                                key="preview"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                className="rounded-lg border-2 border-black bg-white p-4"
                            >
                                <h3 className="mb-2 flex items-center gap-2 font-bold text-purple-600">
                                    <FaCode /> README Preview
                                </h3>
                                <pre className="overflow-x-auto whitespace-pre-wrap text-xs">
                                    {readmeContent.substring(0, 500)}...
                                </pre>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Fun fact */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`fact-${currentFactIndex}`}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.4 }}
                            className="rounded-lg border-2 border-black bg-gradient-to-r from-blue-100 to-purple-100 p-4"
                        >
                            <div className="flex items-start gap-3">
                                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-white">
                                    💡
                                </div>
                                <div>
                                    <p className="text-sm font-medium">{funFacts[currentFactIndex]}</p>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Pro tip */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`tip-${currentTipIndex}`}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                            className="rounded-lg border-2 border-black bg-gradient-to-r from-purple-100 to-pink-100 p-4"
                        >
                            <div className="flex items-start gap-3">
                                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-500 text-white">
                                    🚀
                                </div>
                                <div>
                                    <p className="text-sm font-medium">{tips[currentTipIndex]}</p>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Terminal-style animation */}
            <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    {[...Array(3)].map((_, i) => (
                        <motion.div
                            key={i}
                            animate={{
                                opacity: [0.3, 1, 0.3],
                                y: [0, -3, 0],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                delay: i * 0.2,
                            }}
                            className="h-2 w-2 rounded-full bg-black"
                        />
                    ))}
                    <span className="ml-2 text-xs font-mono">Processing...</span>
                </div>

                <motion.div
                    animate={{
                        scale: [1, 1.05, 1],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                    }}
                    className="flex items-center gap-1 text-xs"
                >
                    <RiRobot2Line className="text-pink-500" />
                    <span>AI-Powered</span>
                </motion.div>
            </div>
        </motion.div>
    );
}