"use client";
import { mockUser, leaderboard } from "@/data/profile";
import { courses } from "@/data/courses";
import { Progress } from "@/components/ui/progress";
import {
  Flame, Star, Trophy, Terminal, Rocket, Database, Zap,
  MessageCircle, Award, Footprints, Lock,
  BookOpen, BadgeCheck, FolderOpen, Crown
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { loc } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  Footprints, Terminal, Rocket, Flame, MessageCircle, Trophy,
  Database, Zap, Star, Award, Lock,
};

const badgeColorMap: Record<string, string> = {
  course: "from-indigo-600 to-indigo-800",
  community: "from-purple-600 to-purple-800",
  challenge: "from-orange-600 to-orange-800",
  streak: "from-red-600 to-red-800",
};

const activityIcons: Record<string, React.ElementType> = {
  lesson_complete: BookOpen,
  badge_earned: BadgeCheck,
  project_submitted: FolderOpen,
  challenge_won: Trophy,
};

function InitialsAvatar({ name, size = "md" }: { name: string; size?: "sm" | "md" | "lg" }) {
  const initials = name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);
  const colors = ["bg-indigo-600", "bg-purple-600", "bg-cyan-600", "bg-green-600", "bg-orange-600"];
  const color = colors[name.charCodeAt(0) % colors.length];
  const sz = size === "sm" ? "w-8 h-8 text-xs" : size === "lg" ? "w-16 h-16 text-xl" : "w-10 h-10 text-sm";
  return (
    <div className={`${sz} ${color} rounded-full flex items-center justify-center text-white font-bold flex-shrink-0`}>
      {initials}
    </div>
  );
}

export default function ProfilePage() {
  const user = mockUser;
  const { lang, t } = useLanguage();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-10 p-6 rounded-2xl bg-slate-900 border border-slate-800">
        <InitialsAvatar name={user.name} size="lg" />
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-slate-100">{user.name}</h1>
          <p className="text-slate-500 text-sm mb-1">@{user.username}</p>
          <p className="text-slate-300 text-sm">{user.bio}</p>
        </div>
        <div className="flex gap-6 text-center">
          <div>
            <p className="text-2xl font-bold text-indigo-400">{user.points.toLocaleString()}</p>
            <p className="text-xs text-slate-500">{t("profile_points")}</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-orange-400 flex items-center justify-center gap-1">
              <Flame className="w-5 h-5" /> {user.streak}
            </p>
            <p className="text-xs text-slate-500">{t("profile_day_streak")}</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-yellow-400">#{user.rank}</p>
            <p className="text-xs text-slate-500">{t("profile_rank")}</p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Course Progress */}
          <section className="p-6 rounded-xl bg-slate-900 border border-slate-800">
            <h2 className="font-bold text-slate-100 mb-5 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-indigo-400" /> {t("course_progress_title")}
            </h2>
            <div className="space-y-5">
              {user.courseProgress.map((cp) => {
                const course = courses.find((c) => c.id === cp.courseId);
                if (!course) return null;
                const pct = cp.totalLessons > 0 ? Math.round((cp.completedLessons / cp.totalLessons) * 100) : 0;
                return (
                  <div key={cp.courseId}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm text-slate-300 font-medium">{loc(course.levelLabel, lang)}</span>
                      <span className="text-xs text-slate-500">{cp.completedLessons}/{cp.totalLessons}{t("lessons_suffix")} · {pct}%</span>
                    </div>
                    <Progress value={pct} className="h-2 bg-slate-800" />
                  </div>
                );
              })}
            </div>
          </section>

          {/* Badges */}
          <section className="p-6 rounded-xl bg-slate-900 border border-slate-800">
            <h2 className="font-bold text-slate-100 mb-5 flex items-center gap-2">
              <Trophy className="w-4 h-4 text-yellow-400" /> {t("badges_title")}
            </h2>
            <div className="grid grid-cols-4 sm:grid-cols-5 gap-4">
              {user.badges.map((badge) => {
                const Icon = iconMap[badge.icon] ?? Star;
                return (
                  <div
                    key={badge.id}
                    title={badge.earned
                      ? `${loc(badge.name, lang)}: ${loc(badge.description, lang)}`
                      : `${t("locked_badge")} ${loc(badge.description, lang)}`
                    }
                    className={`relative flex flex-col items-center gap-2 p-3 rounded-xl border transition-all ${
                      badge.earned
                        ? "border-slate-700 bg-slate-800"
                        : "border-slate-800 bg-slate-900/50 opacity-40"
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br ${badgeColorMap[badge.category]} ${!badge.earned ? "grayscale" : ""}`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xs text-center text-slate-400 leading-tight line-clamp-2">{loc(badge.name, lang)}</span>
                    {!badge.earned && (
                      <Lock className="absolute top-2 right-2 w-3 h-3 text-slate-600" />
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Activity Feed */}
          <section className="p-6 rounded-xl bg-slate-900 border border-slate-800">
            <h2 className="font-bold text-slate-100 mb-5">{t("recent_activity")}</h2>
            <div className="space-y-3">
              {user.activity.map((act) => {
                const Icon = activityIcons[act.type] ?? Star;
                return (
                  <div key={act.id} className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-3.5 h-3.5 text-indigo-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-slate-300">{act.description}</p>
                      <p className="text-xs text-slate-600 mt-0.5">
                        {new Date(act.timestamp).toLocaleDateString(
                          lang === "ko" ? "ko-KR" : "en-US",
                          { month: "short", day: "numeric", year: "numeric" }
                        )}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>

        {/* Leaderboard */}
        <div>
          <section className="p-6 rounded-xl bg-slate-900 border border-slate-800 sticky top-20">
            <h2 className="font-bold text-slate-100 mb-5 flex items-center gap-2">
              <Crown className="w-4 h-4 text-yellow-400" /> {t("leaderboard_title")}
            </h2>
            <div className="space-y-2">
              {leaderboard.map((entry) => (
                <div
                  key={entry.userId}
                  className={`flex items-center gap-3 p-2.5 rounded-lg transition-colors ${
                    entry.userId === user.id ? "bg-indigo-600/20 border border-indigo-600/40" : "hover:bg-slate-800"
                  }`}
                >
                  <span className={`w-6 text-center text-xs font-bold flex-shrink-0 ${
                    entry.rank === 1 ? "text-yellow-400" :
                    entry.rank === 2 ? "text-slate-300" :
                    entry.rank === 3 ? "text-amber-600" :
                    "text-slate-500"
                  }`}>
                    {entry.rank <= 3 ? ["🥇","🥈","🥉"][entry.rank-1] : `#${entry.rank}`}
                  </span>
                  <InitialsAvatar name={entry.name} size="sm" />
                  <div className="flex-1 min-w-0">
                    <p className={`text-xs font-medium truncate ${entry.userId === user.id ? "text-indigo-300" : "text-slate-300"}`}>{entry.name}</p>
                    <p className="text-xs text-slate-500">{entry.points.toLocaleString()}{t("pts_suffix")}</p>
                  </div>
                  <div className="flex items-center gap-0.5 text-xs text-orange-400 flex-shrink-0">
                    <Flame className="w-3 h-3" /> {entry.streak}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
