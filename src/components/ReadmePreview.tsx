"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Components } from "react-markdown";
import { CodeBlock } from "./CodeBlock";


interface ReadmePreviewProps {
    content: string;
    className?: string;
}

export function ReadmePreview({ content, className }: ReadmePreviewProps) {
    const components: Components = {
        h1({ children, ...props }) {
            return (
                <h1 className="text-3xl font-bold mt-8 mb-4 pb-2 border-b border-gray-200 dark:border-gray-700" {...props}>
                    {children}
                </h1>
            );
        },
        h2({ children, ...props }) {
            return (
                <h2 className="text-2xl font-bold mt-6 mb-3 pb-2 border-b border-gray-200 dark:border-gray-700" {...props}>
                    {children}
                </h2>
            );
        },
        h3({ children, ...props }) {
            return (
                <h3 className="text-xl font-bold mt-5 mb-2" {...props}>
                    {children}
                </h3>
            );
        },
        h4({ children, ...props }) {
            return (
                <h4 className="text-lg font-bold mt-4 mb-2" {...props}>
                    {children}
                </h4>
            );
        },
        p({ children, ...props }) {
            return (
                <div className="my-4 leading-relaxed" {...props}>
                    {children}
                </div>
            );
        },
        ul({ children, ...props }) {
            return (
                <ul className="list-disc pl-6 my-4 space-y-1" {...props}>
                    {children}
                </ul>
            );
        },
        ol({ children, ...props }) {
            return (
                <ol className="list-decimal pl-6 my-4 space-y-1" {...props}>
                    {children}
                </ol>
            );
        },
        li({ children, ...props }) {
            return (
                <li className="my-1" {...props}>
                    {children}
                </li>
            );
        },

        blockquote({ children, ...props }) {
            return (
                <blockquote
                    className="border-l-4 border-gray-300 dark:border-gray-600 pl-4 italic my-4 text-gray-600 dark:text-gray-300"
                    {...props}
                >
                    {children}
                </blockquote>
            );
        },
        a({ href, children, ...props }) {
            return (
                <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline transition-colors"
                    {...props}
                >
                    {children}
                </a>
            );
        },
        img({ src = "", alt = "", ...props }) {
            const isBadge = typeof src === "string" && src.includes("img.shields.io");

            if (isBadge) {
                return (
                    <img
                        src={src}
                        alt={alt}
                        className="inline-block mr-2 mb-1 align-middle"
                        {...props}
                    />
                );
            }

            return (
                <div className="my-4">
                    <img
                        src={src}
                        alt={alt}
                        className="rounded-lg shadow-md max-w-full mx-auto border border-gray-200 dark:border-gray-700"
                        {...props}
                    />
                    {alt && (
                        <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-1">
                            {alt}
                        </p>
                    )}
                </div>
            );
        },
        table({ children, }) {
            return (
                <div className="overflow-x-auto my-6 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        {children}
                    </table>
                </div>
            );
        },
        thead({ children, ...props }) {
            return (
                <thead className="bg-gray-50 dark:bg-gray-800" {...props}>
                    {children}
                </thead>
            );
        },
        tr({ children, ...props }) {
            return (
                <tr
                    className="divide-x divide-gray-200 dark:divide-gray-700"
                    {...props}
                >
                    {children}
                </tr>
            );
        },
        th({ children, ...props }) {
            return (
                <th
                    className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                    {...props}
                >
                    {children}
                </th>
            );
        },
        td({ children, ...props }) {
            return (
                <td className="px-4 py-3 text-sm text-gray-800 dark:text-gray-200" {...props}>
                    {children}
                </td>
            );
        },
        hr({ ...props }) {
            return (
                <hr
                    className="my-6 border-t border-gray-200 dark:border-gray-700"
                    {...props}
                />
            );
        },
        ...CodeBlock,
    };

    return (
        <div className={`grid grid-cols-1  gap-1 ${className}`}>
            <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
                {content}
            </ReactMarkdown>
        </div>
    );
}