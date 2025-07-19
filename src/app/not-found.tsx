"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col bg-[#f2e6ff] text-black ">
            {/* Main Content */}
            <main className="flex-grow flex flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-2xl mx-auto"
                >
                    <motion.div
                        animate={{
                            scale: [1, 1.1, 1],
                            rotate: [0, 5, -5, 0],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}
                        className="text-9xl font-bold text-purple-600 mb-6"
                    >
                        404
                    </motion.div>

                    <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                        Oops! Page Not Found
                    </h1>

                    <p className="text-xl text-gray-600  mb-10">
                        The page you&apos;re looking for doesn&apos;t exist or has been moved.
                        Don&apos;t worry, you can find your way back home.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            href="/"
                            className="flex items-center justify-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors group"
                        >
                            Go to Homepage
                            <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <Link
                            href="/contact"
                            className="flex items-center justify-center px-6 py-3 border-2 border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-colors"
                        >
                            Contact Support
                        </Link>
                    </div>
                </motion.div>
            </main>

        </div>
    );
}