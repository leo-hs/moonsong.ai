"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Code2, BookOpen, Users, Trophy, User, Zap, Languages } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import { type TranslationKey } from "@/locales/en";

const NAV_ITEMS: { href: string; labelKey: TranslationKey; icon: React.ElementType }[] = [
  { href: "/courses", labelKey: "nav_courses", icon: BookOpen },
  { href: "/community", labelKey: "nav_community", icon: Users },
  { href: "/challenges", labelKey: "nav_challenges", icon: Trophy },
  { href: "/profile", labelKey: "nav_profile", icon: User },
];

export function Navbar() {
  const pathname = usePathname();
  const { lang, setLang, t } = useLanguage();

  const toggleLang = () => setLang(lang === "en" ? "ko" : "en");

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-white font-bold text-lg hover:opacity-90 transition-opacity">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-600">
            <Code2 className="w-5 h-5 text-white" />
          </div>
          <span>VibeCode <span className="text-indigo-400">Academy</span></span>
        </Link>

        <div className="hidden sm:flex items-center gap-1">
          {NAV_ITEMS.map(({ href, labelKey, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex items-center gap-1.5 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                pathname.startsWith(href)
                  ? "bg-indigo-600/20 text-indigo-300"
                  : "text-slate-400 hover:text-slate-100 hover:bg-slate-800"
              )}
            >
              <Icon className="w-4 h-4" />
              {t(labelKey)}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 px-3 py-2 rounded-md text-sm font-medium text-slate-400 hover:text-slate-100 hover:bg-slate-800 transition-colors"
            aria-label="Toggle language"
          >
            <Languages className="w-4 h-4" />
            {t("lang_toggle")}
          </button>

          <Link
            href="/courses"
            className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-500 transition-colors"
          >
            <Zap className="w-4 h-4" />
            {t("nav_start_learning")}
          </Link>
        </div>
      </div>

      {/* Mobile nav */}
      <div className="sm:hidden flex border-t border-slate-800">
        {NAV_ITEMS.map(({ href, labelKey, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className={cn(
              "flex-1 flex flex-col items-center gap-1 py-2 text-xs font-medium transition-colors",
              pathname.startsWith(href)
                ? "text-indigo-400"
                : "text-slate-500 hover:text-slate-300"
            )}
          >
            <Icon className="w-5 h-5" />
            {t(labelKey)}
          </Link>
        ))}
      </div>
    </nav>
  );
}
