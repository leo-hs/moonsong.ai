"use client";
import Link from "next/link";
import { Code2, Github, Twitter } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-slate-800 bg-slate-950 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 text-white font-bold text-lg mb-3">
              <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-indigo-600">
                <Code2 className="w-4 h-4 text-white" />
              </div>
              VibeCode Academy
            </Link>
            <p className="text-slate-400 text-sm max-w-xs">
              {t("footer_tagline")}
            </p>
          </div>

          <div className="flex gap-12 text-sm">
            <div>
              <h4 className="text-slate-200 font-semibold mb-3">{t("footer_learn")}</h4>
              <ul className="space-y-2 text-slate-400">
                <li><Link href="/courses" className="hover:text-slate-200 transition-colors">{t("footer_all_courses")}</Link></li>
                <li><Link href="/challenges" className="hover:text-slate-200 transition-colors">{t("footer_weekly_challenges")}</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-slate-200 font-semibold mb-3">{t("footer_community")}</h4>
              <ul className="space-y-2 text-slate-400">
                <li><Link href="/community" className="hover:text-slate-200 transition-colors">{t("footer_showcase")}</Link></li>
                <li><Link href="/community" className="hover:text-slate-200 transition-colors">{t("footer_qa_board")}</Link></li>
                <li><Link href="/community" className="hover:text-slate-200 transition-colors">{t("footer_templates")}</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">{t("footer_copyright")}</p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-slate-500 hover:text-slate-300 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-slate-500 hover:text-slate-300 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
