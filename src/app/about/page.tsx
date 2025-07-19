"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaCodeBranch, FaUsers, FaLightbulb } from "react-icons/fa";

export default function About() {
    const features = [
        {
            title: "Visualize Git Workflows",
            description: "Transform complex repository structures into beautiful, interactive ReadMe that anyone can understand.",
            icon: <FaCodeBranch className="text-purple-600 text-4xl" />
        },
        {
            title: "Team Onboarding",
            description: "Accelerate new team member integration with crystal-clear documentation and visual guides.",
            icon: <FaUsers className="text-purple-600 text-4xl" />
        },
        {
            title: "Open Source Power",
            description: "Built by developers for developers, with transparency and community at our core.",
            icon: <FaLightbulb className="text-purple-600 text-4xl" />
        }
    ];

    const team = [
        {
            name: "Ausaf ul Islam",
            role: "Founder & Lead Developer",
            avatar: "/profile_images/ausaf.jpg",
            social: {
                github: "https://github.com/ausafulislam",
                linkedin: "https://linkedin.com/in/ausafulislam",
                twitter: "https://x.com/ausafulislam_h",
            },
            bio: "Leads the project with a focus on full-stack development and product architecture. Passionate about building AI-powered tools that enhance developer productivity."
        },
        {
            name: "Afaq ul Islam",
            role: "Co-Creator & AI Engineer",
            avatar: "/profile_images/afaq.jpg",
            social: {
                github: "https://github.com/afaqulislam",
                linkedin: "https://linkedin.com/in/afaqulislam",
                twitter: "https://x.com/afaqulislam708",
            },
            bio: "Specializes in AI prompt engineering and backend logic. Focused on integrating OpenAI to generate smart, readable, and efficient documentation."
        },
        {
            name: "Imad ul Islam",
            role: "Co-Creator & Frontend Engineer",
            avatar: "/profile_images/imad.jpg",
            social: {
                github: "https://github.com/imad-ul-islam598",
                linkedin: "https://www.linkedin.com/in/himadulislam",
                twitter: "https://x.com/imadulislam598",
            },
            bio: "Handles UI/UX design and frontend development. Ensures that users enjoy a smooth and intuitive interface while generating their project documentation."
        },
    ];

    const stats = [
        { value: "10,000+", label: "Active Users" },
        { value: "100+", label: "Git Repos Documented" },
        { value: "24/7", label: "Developer Support" }
    ];

    return (
        <div className="min-h-screen bg-[#f2e6ff] overflow-hidden relative">
            <div className="relative mx-auto flex max-w-5xl  top-30 flex-col items-center justify-center pt-24 sm:flex-row sm:items-center">
                {/* Left/Floating SVG */}
                <motion.svg
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="absolute left-4 top-32 w-16 sm:w-20 md:w-24 md:left-10 lg:left-0 z-10"
                    viewBox="0 0 91 98"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="m35.878 14.162 1.333-5.369 1.933 5.183c4.47 11.982 14.036 21.085 25.828 24.467l5.42 1.555-5.209 2.16c-11.332 4.697-19.806 14.826-22.888 27.237l-1.333 5.369-1.933-5.183C34.56 57.599 24.993 48.496 13.201 45.114l-5.42-1.555 5.21-2.16c11.331-4.697 19.805-14.826 22.887-27.237Z"
                        fill="#a855f7"
                        stroke="#000"
                        strokeWidth="3.445"
                    />
                    <path
                        d="M79.653 5.729c-2.436 5.323-9.515 15.25-18.341 12.374m9.197 16.336c2.6-5.851 10.008-16.834 18.842-13.956m-9.738-15.07c-.374 3.787 1.076 12.078 9.869 14.943M70.61 34.6c.503-4.21-.69-13.346-9.49-16.214M14.922 65.967c1.338 5.677 6.372 16.756 15.808 15.659M18.21 95.832c-1.392-6.226-6.54-18.404-15.984-17.305m12.85-12.892c-.41 3.771-3.576 11.588-12.968 12.681M18.025 96c.367-4.21 3.453-12.905 12.854-14"
                        stroke="#000"
                        strokeWidth="2.548"
                        strokeLinecap="round"
                    />
                </motion.svg>

                {/* Right/Floating SVG */}
                <motion.svg
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="absolute right-4 bottom-4  w-16 sm:w-20 lg:right-8 z-10"
                    viewBox="0 0 92 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="m35.213 16.953.595-5.261 2.644 4.587a35.056 35.056 0 0 0 26.432 17.33l5.261.594-4.587 2.644A35.056 35.056 0 0 0 48.23 63.28l-.595 5.26-2.644-4.587a35.056 35.056 0 0 0-26.432-17.328l-5.261-.595 4.587-2.644a35.056 35.056 0 0 0 17.329-26.433Z"
                        fill="#38bdf8"
                        stroke="#000"
                        strokeWidth="2.868"
                    />
                    <path
                        d="M75.062 40.108c1.07 5.255 1.072 16.52-7.472 19.54m7.422-19.682c1.836 2.965 7.643 8.14 16.187 5.121-8.544 3.02-8.207 15.23-6.971 20.957-1.97-3.343-8.044-9.274-16.588-6.254M12.054 28.012c1.34-5.22 6.126-15.4 14.554-14.369M12.035 28.162c-.274-3.487-2.93-10.719-11.358-11.75C9.104 17.443 14.013 6.262 15.414.542c.226 3.888 2.784 11.92 11.212 12.95"
                        stroke="#000"
                        strokeWidth="2.319"
                        strokeLinecap="round"
                    />
                </motion.svg>
            </div>

            {/* Hero Section with Animated Background */}
            <section className="relative py-32 overflow-hidden">


                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <h1 className="text-5xl md:text-7xl font-extrabold text-black mb-6 leading-tight">
                            We Make <span className="text-purple-600">Git</span> Beautiful
                        </h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="text-2xl text-gray-600 mb-10 max-w-3xl mx-auto"
                        >
                            Revolutionizing developer documentation with stunning visualizations since 2023.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            className="flex flex-wrap justify-center gap-4"
                        >
                            <Link
                                href="/"
                                className="px-10 py-4 bg-purple-600 hover:bg-purple-700 text-white text-xl font-bold rounded-xl transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                            >
                                Get Started Now
                            </Link>
                            <Link
                                href="/live-demo"
                                className="px-10 py-4 border-3 border-purple-600 text-purple-600 text-xl font-bold rounded-xl transition-all transform hover:scale-105 hover:bg-purple-50"
                            >
                                See Live Demo
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-[#f2e6ff] border-b-2 border-black relative">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
                    >
                        {stats.map((stat, index) => (
                            <div key={index} className="bg-gray-50 p-8 rounded-2xl text-center shadow-lg relative z-10">
                                <motion.p
                                    className="text-5xl font-bold text-purple-600 mb-2"
                                    initial={{ scale: 0.9 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ delay: index * 0.1, type: "spring" }}
                                >
                                    {stat.value}
                                </motion.p>
                                <p className="text-xl text-gray-600">{stat.label}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-28 bg-[#f2e6ff] border-b-2 border-black relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto text-center mb-20 relative z-10"
                    >
                        <h2 className="text-4xl font-bold text-black mb-6">Why Developers Love Us</h2>
                        <p className="text-2xl text-gray-600">
                            We&apos;re building the future of technical documentation
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto relative z-10">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                viewport={{ once: true }}
                                className="bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
                            >
                                <div className="mb-6 flex justify-center">
                                    <motion.div
                                        whileHover={{ rotate: 10, scale: 1.1 }}
                                        className="bg-purple-100 p-4 rounded-full"
                                    >
                                        {feature.icon}
                                    </motion.div>
                                </div>
                                <h3 className="text-2xl font-bold text-black mb-4">{feature.title}</h3>
                                <p className="text-lg text-gray-600">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-28 bg-[#f2e6ff] border-b-2 border-black relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto text-center mb-20 relative z-10"
                    >
                        <h2 className="text-4xl font-bold text-black mb-6">Meet The Visionaries</h2>
                        <p className="text-2xl text-gray-600">
                            The brilliant minds behind GitReadMe
                        </p>
                    </motion.div>

                    <div className="flex flex-wrap justify-center gap-12 max-w-6xl mx-auto relative z-10">
                        {team.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="w-full sm:w-80 text-center"
                            >
                                <motion.div
                                    whileHover={{ y: -10 }}
                                    className="relative mb-6 mx-auto w-48 h-48 rounded-full overflow-hidden border-4 border-purple-600 shadow-xl"
                                >
                                    <Image
                                        src={member.avatar}
                                        alt={member.name}
                                        height={192}
                                        width={192}
                                        priority
                                        sizes="100%"
                                        className="w-full h-full object-cover"
                                    />
                                </motion.div>
                                <h3 className="text-2xl font-bold text-black">{member.name}</h3>
                                <p className="text-purple-600 text-xl mb-4">{member.role}</p>
                                <p className="text-gray-600 mb-6 text-lg">{member.bio}</p>
                                <div className="flex justify-center space-x-5">
                                    <Link href={member.social.github} target="_blank" className="text-gray-700 hover:text-purple-600 text-2xl">
                                        <FaGithub />
                                    </Link>
                                    <Link href={member.social.linkedin} target="_blank" className="text-gray-700 hover:text-purple-600 text-2xl">
                                        <FaLinkedin />
                                    </Link>
                                    <Link href={member.social.twitter} target="_blank" className="text-gray-700 hover:text-purple-600 text-2xl">
                                        <FaTwitter />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mega CTA Section */}
            <section className="py-32 bg-gradient-to-r from-purple-600 to-purple-800 relative overflow-hidden">
                <div className="container mx-auto px-4 text-center relative z-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-white mb-8"
                    >
                        Ready to Transform Your Documentation?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-2xl text-purple-100 mb-12 max-w-3xl mx-auto"
                    >
                        Join thousands of developers who visualize their Git workflows beautifully.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        viewport={{ once: true }}
                        className="flex flex-wrap justify-center gap-6"
                    >
                        <Link
                            href="/"
                            className="px-12 py-5 bg-white text-purple-600 text-xl font-bold rounded-xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl"
                        >
                            Start Free Trial
                        </Link>
                        <Link
                            href="/live-demo"
                            className="px-12 py-5 border-3 border-white text-white text-xl font-bold rounded-xl hover:bg-white/10 transition-all transform hover:scale-105"
                        >
                            Schedule Demo
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}