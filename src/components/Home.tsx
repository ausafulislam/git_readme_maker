"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRight, FaRocket, FaCode, FaChartLine, FaMagic } from "react-icons/fa";
import { FiZap } from "react-icons/fi";
import { SiTypescript, SiNextdotjs, SiReact, } from "react-icons/si";
import React from "react";
import Image from "next/image";

export default function HomePage() {
    const features = [
        {
            icon: <FaMagic className="text-purple-500 text-3xl" />,
            title: "AI-Powered Generation",
            description: "Automatically creates professional READMEs tailored to your project"
        },
        {
            icon: <FaCode className="text-purple-500 text-3xl" />,
            title: "Multiple Templates",
            description: "Choose from various templates for different project types"
        },
        {
            icon: <FaChartLine className="text-purple-500 text-3xl" />,
            title: "Visual Analytics",
            description: "Get insights about your repository structure"
        }
    ];

    const examples = [
        {
            title: "React Project",
            image: "/react-readme-example.png",
            description: "Professional README for React applications"
        },
        {
            title: "Node.js API",
            image: "/node-readme-example.png",
            description: "Complete documentation for backend services"
        },
        {
            title: "Full Stack App",
            image: "/fullstack-readme-example.png",
            description: "End-to-end project documentation"
        }
    ];

    return (
        <>
            <div className="min-h-screen bg-[#f2e6ff]">
                {/* Hero Section */}
                <section className="relative bg-[#f2e6ff] py-48 border-b-2 border-black ">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
                            >
                                Beautiful <span className="text-purple-600">READMEs</span> in Seconds
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto"
                            >
                                Automatically generate professional documentation for your GitHub repositories with our AI-powered tool.
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="flex flex-col sm:flex-row justify-center gap-4"
                            >
                                <Link
                                    href="/generate"
                                    className="flex items-center justify-center px-8 py-4 bg-purple-600 text-white rounded-lg font-bold hover:bg-purple-700 transition-colors group"
                                >
                                    Generate Now <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link
                                    href="#examples"
                                    className="flex items-center justify-center px-8 py-4 border-2 border-purple-600 text-purple-600 rounded-lg font-bold hover:bg-purple-50 transition-colors"
                                >
                                    See Examples
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-16 bg-[#f2e6ff]">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center mb-16">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose GitReadMe?</h2>
                            <p className="text-lg text-gray-600">
                                The ultimate tool for developers who care about documentation
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
                                >
                                    <div className="mb-4">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                                    <p className="text-gray-600">{feature.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Video Preview Section */}
                <section className="py-16 bg-[#f2e6ff]">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">See It In Action</h2>
                            <p className="text-lg text-gray-600">
                                Watch how easy it is to generate beautiful documentation
                            </p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="relative aspect-video bg-white rounded-xl overflow-hidden shadow-xl max-w-4xl mx-auto"
                        >
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center">
                                    <FiZap className="mx-auto text-4xl text-purple-600 mb-4" />
                                    <p className="text-xl font-medium">Video Demo Coming Soon</p>
                                </div>
                            </div>
                            {/* Replace with actual video component */}
                            <video controls className="w-full h-full object-cover">
                                <source src="/demo-video.mp4" type="video/mp4" />
                            </video>
                        </motion.div>
                    </div>
                </section>

                {/* Example READMEs Section */}
                <section id="examples" className="py-16 bg-[#f2e6ff]">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Example READMEs</h2>
                            <p className="text-lg text-gray-600">
                                See what our generator can create for your projects
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 ">
                            {examples.map((example, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-100"
                                >
                                    <div className="h-48 bg-gray-200 flex items-center justify-center">
                                        <div className="text-center p-4">
                                            <FaRocket className="mx-auto text-4xl text-purple-600 mb-2" />
                                            <p className="font-medium">{example.title} Example</p>
                                        </div>
                                        {/* Replace with actual image */}
                                        <Image
                                            src={example.image}
                                            alt={example.title}
                                            height={100}
                                            width={100}
                                            sizes="(100vw)"
                                            priority
                                            className="w-full h-full object-cover" />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">{example.title}</h3>
                                        <p className="text-gray-600 mb-4">{example.description}</p>
                                        <Link
                                            href="/generate"
                                            className="text-purple-600 font-medium hover:underline inline-flex items-center"
                                        >
                                            Try it yourself <FaArrowRight className="ml-1" />
                                        </Link>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Tech Stack Section */}
                <section className="py-16 bg-[#f2e6ff]">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Built With Modern Technologies</h2>
                            <p className="text-lg text-gray-600">
                                Our generator uses cutting-edge tools to deliver the best results
                            </p>
                        </div>

                        <div className="flex justify-center gap-8 flex-wrap">
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="flex flex-col items-center"
                            >
                                <SiNextdotjs className="text-4xl text-gray-900" />
                                <span className="mt-2 font-medium">Next.js</span>
                            </motion.div>
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="flex flex-col items-center"
                            >
                                <SiTypescript className="text-4xl text-blue-600" />
                                <span className="mt-2 font-medium">TypeScript</span>
                            </motion.div>
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="flex flex-col items-center"
                            >
                                <SiReact className="text-4xl text-blue-500" />
                                <span className="mt-2 font-medium">React</span>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-purple-600">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Documentation?</h2>
                        <p className="text-xl text-purple-100 mb-10 max-w-2xl mx-auto">
                            Join thousands of developers who create beautiful READMEs in minutes.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link
                                href="/generate"
                                className="px-8 py-4 bg-white text-purple-600 text-lg font-bold rounded-lg hover:bg-gray-100 transition-colors"
                            >
                                Get Started Free
                            </Link>
                            <Link
                                href="#examples"
                                className="px-8 py-4 border-2 border-white text-white text-lg font-bold rounded-lg hover:bg-white/10 transition-colors"
                            >
                                See More Examples
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}