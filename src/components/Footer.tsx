import React from "react";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="mt-auto bg-[#f2e6ff] backdrop-blur-sm border-t-2 border-black py-6">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-center text-center">
                    <div className="text-sm sm:text-base text-black">
                        <span>© {new Date().getFullYear()} GitReadMe. All rights reserved.</span>
                        <span className="mx-2 hidden sm:inline-block">|</span>
                        <span>
                            Made by{" "}
                            <Link
                                href="https://ausafulislam-xyz.vercel.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-purple-600 hover:underline font-medium"
                            >
                                Ausaf ul Islam
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}