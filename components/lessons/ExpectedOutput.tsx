"use client";
import { Terminal } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface Props {
  output: string;
}

export function ExpectedOutput({ output }: Props) {
  const { t } = useLanguage();

  return (
    <div className="my-4 rounded-lg border border-slate-700 overflow-hidden">
      <div className="bg-slate-800 px-4 py-2 text-xs text-slate-400 border-b border-slate-700 flex items-center gap-2">
        <Terminal className="w-3.5 h-3.5" />
        <span>{t("expected_output")}</span>
      </div>
      <div className="bg-slate-950 p-4">
        <pre className="text-sm font-mono text-slate-300 whitespace-pre leading-relaxed">{output}</pre>
      </div>
    </div>
  );
}
