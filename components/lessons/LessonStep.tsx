"use client";
import { LessonStep as LessonStepType } from "@/types";
import { CodeBlock } from "./CodeBlock";
import { ExpectedOutput } from "./ExpectedOutput";
import { TroubleshootingFAQ } from "./TroubleshootingFAQ";
import { useLanguage } from "@/contexts/LanguageContext";

interface Props {
  step: LessonStepType;
  stepNumber: number;
  totalSteps: number;
}

export function LessonStep({ step, stepNumber, totalSteps }: Props) {
  const { t } = useLanguage();

  return (
    <div className="max-w-3xl">
      <div className="flex items-center gap-2 text-xs text-slate-500 mb-4">
        <span>
          {t("step_label")}{stepNumber}{t("step_separator")}{totalSteps}{t("step_suffix")}
        </span>
        <div className="flex-1 h-1 bg-slate-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-indigo-600 rounded-full transition-all duration-500"
            style={{ width: `${(stepNumber / totalSteps) * 100}%` }}
          />
        </div>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mb-4">{step.title}</h2>

      <div className="text-slate-300 leading-relaxed mb-6 space-y-3">
        {step.content.split("\n\n").map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>

      {step.codeBlocks.map((block) => (
        <CodeBlock key={block.id} block={block} />
      ))}

      {step.expectedOutput && (
        <ExpectedOutput output={step.expectedOutput} />
      )}

      <TroubleshootingFAQ faqs={step.troubleshootingFAQs} />
    </div>
  );
}
