"use client";
import Link from "next/link";
import { Course } from "@/types";
import { CheckCircle2, Circle, ChevronRight } from "lucide-react";
import { cn, loc } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

interface Props {
  course: Course;
  activeLessonIndex: number;
  activeStepIndex: number;
}

export function LessonSidebar({ course, activeLessonIndex, activeStepIndex }: Props) {
  const { lang, t } = useLanguage();

  return (
    <aside className="w-72 flex-shrink-0 border-r border-slate-800 overflow-y-auto bg-slate-900/50">
      <div className="p-4 border-b border-slate-800">
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">{t("sidebar_course_label")}</p>
        <h3 className="text-sm font-semibold text-slate-200 leading-snug">{loc(course.title, lang)}</h3>
      </div>

      <nav className="p-2">
        {course.lessons.map((lesson, li) => (
          <div key={lesson.id} className="mb-1">
            <div className="flex items-center gap-2 px-3 py-2 rounded-md">
              <div className={cn(
                "w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold",
                li < activeLessonIndex
                  ? "bg-green-600 text-white"
                  : li === activeLessonIndex
                  ? "bg-indigo-600 text-white"
                  : "bg-slate-800 text-slate-500"
              )}>
                {li < activeLessonIndex ? <CheckCircle2 className="w-3.5 h-3.5" /> : li + 1}
              </div>
              <span className={cn(
                "text-xs font-semibold truncate",
                li === activeLessonIndex ? "text-slate-100" : "text-slate-400"
              )}>
                {loc(lesson.title, lang)}
              </span>
            </div>

            {li === activeLessonIndex && (
              <div className="ml-7 space-y-0.5">
                {lesson.steps.map((step, si) => (
                  <Link
                    key={step.id}
                    href={`/courses/${course.id}/lessons?lesson=${li}&step=${si}`}
                    className={cn(
                      "flex items-center gap-2 px-3 py-1.5 rounded-md text-xs transition-colors",
                      si === activeStepIndex
                        ? "bg-indigo-600/20 text-indigo-300"
                        : "text-slate-500 hover:text-slate-300 hover:bg-slate-800"
                    )}
                  >
                    {si < activeStepIndex ? (
                      <CheckCircle2 className="w-3 h-3 text-green-400 flex-shrink-0" />
                    ) : si === activeStepIndex ? (
                      <ChevronRight className="w-3 h-3 flex-shrink-0" />
                    ) : (
                      <Circle className="w-3 h-3 flex-shrink-0 opacity-40" />
                    )}
                    <span className="truncate">{step.title}</span>
                  </Link>
                ))}
              </div>
            )}

            {li !== activeLessonIndex && (
              <div className="ml-7 space-y-0.5">
                {lesson.steps.map((step, si) => (
                  <Link
                    key={step.id}
                    href={`/courses/${course.id}/lessons?lesson=${li}&step=${si}`}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-md text-xs text-slate-600 hover:text-slate-400 transition-colors"
                  >
                    <Circle className="w-3 h-3 flex-shrink-0 opacity-30" />
                    <span className="truncate">{step.title}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
}
