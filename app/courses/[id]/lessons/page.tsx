import { notFound } from "next/navigation";
import { getCourseById } from "@/data/courses";
import { LessonSidebar } from "@/components/lessons/LessonSidebar";
import { LessonStep } from "@/components/lessons/LessonStep";
import { LessonNavigation } from "@/components/lessons/LessonNavigation";

interface Props {
  params: { id: string };
  searchParams: { lesson?: string; step?: string };
}

export default function LessonPage({ params, searchParams }: Props) {
  const course = getCourseById(params.id);
  if (!course) notFound();

  const lessonIndex = Math.max(0, Number(searchParams.lesson ?? 0));
  const stepIndex = Math.max(0, Number(searchParams.step ?? 0));

  const lesson = course.lessons[lessonIndex];
  const step = lesson?.steps[stepIndex];

  return (
    <div className="flex h-[calc(100vh-64px)]">
      <LessonSidebar course={course} activeLessonIndex={lessonIndex} activeStepIndex={stepIndex} />

      <div className="flex-1 overflow-y-auto">
        <div className="max-w-3xl mx-auto px-6 py-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-6">
            <span className="text-indigo-400">{course.levelLabel.en}</span>
            <span>/</span>
            <span>{lesson?.title.en}</span>
          </div>

          {step && lesson ? (
            <>
              <LessonStep
                step={step}
                stepNumber={stepIndex + 1}
                totalSteps={lesson.steps.length}
              />
              <LessonNavigation
                course={course}
                lessonIndex={lessonIndex}
                stepIndex={stepIndex}
              />
            </>
          ) : (
            <div className="text-center py-20 text-slate-400">
              <p>Select a step from the sidebar to begin.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
