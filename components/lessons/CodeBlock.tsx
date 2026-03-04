"use client";
import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { CodeBlock as CodeBlockType } from "@/types";

interface Props {
  block: CodeBlockType;
}

export function CodeBlock({ block }: Props) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(block.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-lg border border-slate-700 overflow-hidden my-4">
      {block.label && (
        <div className="bg-slate-800 px-4 py-2 text-xs text-slate-400 border-b border-slate-700 flex justify-between items-center">
          <span className="font-medium">{block.label}</span>
          <span className="text-slate-600 uppercase tracking-wider">{block.language}</span>
        </div>
      )}
      <div className="relative bg-slate-900 p-4 group">
        <pre className="text-sm font-mono overflow-x-auto whitespace-pre leading-relaxed">
          <code className={block.language === "bash" ? "text-green-400" : block.language === "text" ? "text-slate-300" : "text-blue-300"}>
            {block.code}
          </code>
        </pre>
        <button
          onClick={handleCopy}
          aria-label="Copy code"
          className="absolute top-3 right-3 p-1.5 rounded-md bg-slate-800 border border-slate-700 text-slate-400 hover:text-slate-100 hover:border-slate-500 transition-colors opacity-0 group-hover:opacity-100"
        >
          {copied ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
        </button>
      </div>
    </div>
  );
}
