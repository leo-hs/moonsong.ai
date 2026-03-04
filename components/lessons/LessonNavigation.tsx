"use client";
import Link from "next/link";
import { Course } from "@/types";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

interface Props {
  course: Course;
  lessonIndex: number;
  stepIndex: number;
}

export function LessonNavigation({ course, lessonIndex, stepIndex }: Props) {
  const { t } = useLanguage();

  const lesson = course.lessons[lessonIndex];
  const totalSteps = lesson?.steps.length ?? 0;

  const hasPrev = stepIndex > 0 || lessonIndex > 0;
  const hasNext = stepIndex < totalSteps - 1 || lessonIndex < course.lessons.length - 1;

  let prevHref = "#";
  let nextHref = "#";

  if (stepIndex > 0) {
    prevHref = `/courses/${course.id}/lessons?lesson=${lessonIndex}&step=${stepIndex - 1}`;
  } else if (lessonIndex > 0) {
    const prevLesson = course.lessons[lessonIndex - 1];
    prevHref = `/courses/${course.id}/lessons?lesson=${lessonIndex - 1}&step=${prevLesson.steps.length - 1}`;
  }

  if (stepIndex < totalSteps - 1) {
    nextHref = `/courses/${course.id}/lessons?lesson=${lessonIndex}&step=${stepIndex + 1}`;
  } else if (lessonIndex < course.lessons.length - 1) {
    nextHref = `/courses/${course.id}/lessons?lesson=${lessonIndex + 1}&step=0`;
  }

  return (
    <div className="flex justify-between items-center mt-12 pt-6 border-t border-slate-800">
      {hasPrev ? (
        <Link href={prevHref}>
          <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800">
            <ArrowLeft className="mr-2 w-4 h-4" /> {t("nav_previous")}
          </Button>
        </Link>
      ) : (
        <div />
      )}
      {hasNext ? (
        <Link href={nextHref}>
          <Button className="bg-indigo-600 hover:bg-indigo-500 text-white">
            {t("nav_next")} <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
      ) : (
        <Link href="/courses">
          <Button className="bg-green-600 hover:bg-green-500 text-white">
            {t("nav_complete_course")} <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
      )}
    </div>
  );
}
