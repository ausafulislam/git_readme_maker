"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { cx } from "../../src/utils";

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [starCount, setStarCount] = useState<number | null>(null);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const navLinks = [
        { href: "/about", label: "About" },
    ];

    const socialLinks = [
        { href: "https://github.com/ausafulislam", icon: <FaGithub className="h-5 w-5" />, label: "GitHub" },
        { href: "https://www.linkedin.com/in/ausafulislam/", icon: <FaLinkedin className="h-5 w-5" />, label: "LinkedIn" },
        { href: "https://twitter.com/ausafulislam_h", icon: <FaTwitter className="h-5 w-5" />, label: "Twitter" },
    ];

    // ✅ Fetch GitHub star count
    useEffect(() => {
        const fetchStars = async () => {
            try {
                const res = await fetch("https://api.github.com/repos/ausafulislam/git_readme_maker");
                const data = await res.json();
                setStarCount(data.stargazers_count);
            } catch (error) {
                console.error("Error fetching GitHub stars:", error);
            }
        };
        fetchStars();
    }, []);

    const formatStarCount = (count: number | null) => {
        if (!count) return "10.0k";
        if (count >= 1000) {
            return `${(count / 1000).toFixed(1)}k`;
        }
        return count.toString();
    };

    return (
        <header className="sticky top-0 z-50 bg-[#f2e6ff] backdrop-blur-sm border-b-2 border-black">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <Link href="/" className="flex items-center" aria-label="Home">
                    <span className="text-2xl font-bold sm:text-3xl">
                        <span className="text-black">Git</span>
                        <span className="text-purple-600">ReadMe</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="flex items-center space-x-6">
                    <nav className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-lg font-medium text-gray-900 transition-all hover:text-purple-600 hover:-translate-y-0.5 px-2 py-1"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                    <div className="h-6 w-[2px] hidden md:flex  bg-gray-400 mx-2"></div>

                    <div className="flex items-center space-x-4">
                        {socialLinks.map((social, index) => (
                            <Link
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-900 hover:text-purple-600 transition-all hover:-translate-y-0.5 p-1"
                                aria-label={social.label}
                            >
                                {social.icon}
                            </Link>
                        ))}

                        {/* ✅ GitHub Stars */}
                        <div className="flex items-center gap-1 text-md font-medium text-black">
                            <span className="text-yellow-500 text-xl">★</span>
                            {formatStarCount(starCount)}
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden z-50 p-2"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                    aria-expanded={isMenuOpen}
                >
                    <div className="w-6 h-5 relative flex flex-col justify-between">
                        <span
                            className={`block h-0.5 w-full bg-black transform transition duration-300 ease-in-out ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}
                        />
                        <span
                            className={`block h-0.5 w-full bg-black transition duration-300 ease-in-out ${isMenuOpen ? "opacity-0" : ""}`}
                        />
                        <span
                            className={`block h-0.5 w-full bg-black transform transition duration-300 ease-in-out ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
                        />
                    </div>
                </button>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <nav
                        className={cx(
                            "fixed top-0 left-1/2 -translate-x-1/2 z-40",
                            "w-max py-3 px-6 border border-solid border-black",
                            "rounded-full font-medium capitalize items-center flex sm:hidden",
                            "bg-white/80 backdrop-blur-md",
                            "transition-all duration-300 ease-out",
                            "opacity-0 -translate-y-4 scale-95",
                            isMenuOpen && "opacity-100 translate-y-18 scale-100"
                        )}
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={toggleMenu}
                                className="mx-2 text-base font-medium text-black hover:text-purple-600 transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                )}
            </div>
        </header>
    );
}
