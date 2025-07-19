"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "./ui/button";

export function CopyButton({ text }: { text: string }) {
    const [isCopied, setIsCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(text);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    };

    return (
        <Button
            variant="ghost"
            size="sm"
            className="h-6 w-6 p-0 text-gray-300 hover:text-white hover:bg-gray-700"
            onClick={copyToClipboard}
        >
            {isCopied ? (
                <Check className="h-3 w-3" />
            ) : (
                <Copy className="h-3 w-3" />
            )}
        </Button>
    );
}