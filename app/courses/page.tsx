"use client";
import Link from "next/link";
import { useState } from "react";
import { courses } from "@/data/courses";
import { CourseLevel } from "@/types";
import { Users, Clock, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { loc } from "@/lib/utils";

const levelColors: Record<number, { badge: string; dot: string }> = {
  0: { badge: "bg-slate-700 text-slate-200", dot: "bg-slate-400" },
  1: { badge: "bg-indigo-600/30 text-indigo-300 border border-indigo-600/50", dot: "bg-indigo-400" },
  2: { badge: "bg-purple-600/30 text-purple-300 border border-purple-600/50", dot: "bg-purple-400" },
  3: { badge: "bg-cyan-600/30 text-cyan-300 border border-cyan-600/50", dot: "bg-cyan-400" },
};

export default function CoursesPage() {
  const [activeFilter, setActiveFilter] = useState<CourseLevel | "all">("all");
  const { lang, t } = useLanguage();

  const filterOptions: { label: string; value: CourseLevel | "all" }[] = [
    { label: t("filter_all"), value: "all" },
    { label: t("filter_level_0"), value: 0 },
    { label: t("filter_level_1"), value: 1 },
    { label: t("filter_level_2"), value: 2 },
    { label: t("filter_level_3"), value: 3 },
  ];

  const filtered = activeFilter === "all" ? courses : courses.filter((c) => c.level === activeFilter);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-2">{t("courses_page_title")}</h1>
        <p className="text-slate-400 text-lg">{t("courses_page_subtitle")}</p>
      </div>

      {/* Filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {filterOptions.map((opt) => (
          <button
            key={String(opt.value)}
            onClick={() => setActiveFilter(opt.value)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeFilter === opt.value
                ? "bg-indigo-600 text-white"
                : "bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-slate-200"
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 gap-6">
        {filtered.map((course) => (
          <Link key={course.id} href={`/courses/${course.id}/lessons?lesson=0&step=0`} className="group">
            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-slate-600 transition-all h-full flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${levelColors[course.level].badge}`}>
                  {loc(course.levelLabel, lang)}
                </span>
              </div>

              <h2 className="font-bold text-xl text-slate-100 mb-2 group-hover:text-indigo-300 transition-colors">
                {loc(course.title, lang)}
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">{loc(course.description, lang)}</p>

              <div className="space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {course.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-slate-800">
                  <div className="flex items-center gap-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {course.totalDuration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5" /> {course.enrolledCount.toLocaleString()}{t("course_enrolled_suffix")}
                    </span>
                  </div>
                  <span className="text-indigo-400 text-xs font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    {t("course_start")} <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
