"use client";
import { FAQ } from "@/types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AlertCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface Props {
  faqs: FAQ[];
}

export function TroubleshootingFAQ({ faqs }: Props) {
  const { t } = useLanguage();

  if (faqs.length === 0) return null;

  return (
    <div className="mt-6 p-4 rounded-lg bg-amber-950/20 border border-amber-900/40">
      <div className="flex items-center gap-2 mb-3 text-amber-400 text-sm font-semibold">
        <AlertCircle className="w-4 h-4" />
        {t("troubleshooting")}
      </div>
      <Accordion type="multiple" className="space-y-1">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="border-amber-900/30">
            <AccordionTrigger className="text-sm text-amber-200 hover:text-amber-100 hover:no-underline py-2 text-left">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-sm text-slate-300 leading-relaxed pb-3">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
