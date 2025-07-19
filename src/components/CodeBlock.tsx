// components.tsx
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { CopyButton } from "./CopyButton"; // adjust if needed

export const CodeBlock = {
    code({
        inline,
        className,
        children,
        ...props
    }: {
        inline?: boolean;
        className?: string;
        children?: React.ReactNode;
    }) {
        const match = /language-(\w+)/.exec(className || "");
        const code = String(children).replace(/\n$/, "");

        if (!inline && match) {
            return (
                <div className="relative my-4">
                    <div className="flex items-center justify-between bg-gray-800 px-4 py-2 rounded-t-lg">
                        <span className="text-xs text-gray-300">{match[1]}</span>
                        <CopyButton text={code} />
                    </div>
                    <SyntaxHighlighter
                        language={match[1]}
                        style={oneDark}
                        PreTag="div"
                        customStyle={{
                            margin: 0,
                            borderRadius: "0 0 0.5rem 0.5rem",
                            padding: "1rem",
                            fontSize: "0.9rem",
                            backgroundColor: "#282c34",
                        }}
                        {...props}
                    >
                        {code}
                    </SyntaxHighlighter>
                </div>
            );
        }

        return (
            <code
                className="bg-gray-500 text-sm rounded px-2 py-1 font-mono"
                {...props}
            >
                {children}
            </code>
        );
    },
};
