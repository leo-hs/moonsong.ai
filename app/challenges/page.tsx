"use client";
import { currentChallenge, pastChallenges } from "@/data/challenges";
import { Calendar, CheckCircle2, Heart, Trophy } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { loc } from "@/lib/utils";

function InitialsAvatar({ name }: { name: string }) {
  const initials = name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);
  const colors = ["bg-indigo-600", "bg-purple-600", "bg-cyan-600", "bg-green-600", "bg-orange-600"];
  const color = colors[name.charCodeAt(0) % colors.length];
  return (
    <div className={`w-8 h-8 ${color} rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
      {initials}
    </div>
  );
}

export default function ChallengesPage() {
  const { lang, t } = useLanguage();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-2">{t("challenges_title")}</h1>
        <p className="text-slate-400">{t("challenges_subtitle")}</p>
      </div>

      {/* Current challenge */}
      {currentChallenge && (
        <section className="mb-14">
          <div className="flex items-center gap-2 mb-4">
            <span className="flex items-center gap-1.5 text-xs font-semibold text-orange-300 bg-orange-400/10 border border-orange-400/30 px-3 py-1 rounded-full">
              <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
              {t("this_weeks_challenge")}
            </span>
          </div>

          <div className="p-8 rounded-2xl bg-gradient-to-br from-indigo-950/60 via-slate-900 to-purple-950/40 border border-indigo-800/50">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <h2 className="text-3xl font-bold text-slate-100 mb-1">{loc(currentChallenge.title, lang)}</h2>
                <div className="flex items-center gap-1.5 text-sm text-slate-500">
                  <Calendar className="w-4 h-4" />
                  {t("deadline")} {new Date(currentChallenge.deadline).toLocaleDateString(
                    lang === "ko" ? "ko-KR" : "en-US",
                    { month: "long", day: "numeric", year: "numeric" }
                  )}
                </div>
              </div>
              <Trophy className="w-10 h-10 text-yellow-400 flex-shrink-0 opacity-80" />
            </div>

            <p className="text-slate-300 leading-relaxed mb-6">{loc(currentChallenge.description, lang)}</p>

            <div className="mb-6">
              <h3 className="text-sm font-semibold text-slate-200 mb-3">{t("requirements")}</h3>
              <ul className="space-y-2">
                {currentChallenge.requirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                    {loc(req, lang)}
                  </li>
                ))}
              </ul>
            </div>

            <button className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-lg text-sm transition-colors">
              {t("submit_solution")}
            </button>
          </div>

          {/* Current submissions */}
          {currentChallenge.submissions.length > 0 && (
            <div className="mt-6">
              <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">{t("early_submissions")}</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {currentChallenge.submissions.map((sub) => (
                  <div key={sub.id} className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-3">
                    <InitialsAvatar name={sub.author} />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-slate-100">{sub.author}</p>
                      <p className="text-xs text-slate-400 truncate">{sub.description}</p>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-slate-500 flex-shrink-0">
                      <span className="flex items-center gap-1"><Heart className="w-3.5 h-3.5" /> {sub.likes}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
      )}

      {/* Past challenges */}
      <section>
        <h2 className="text-xl font-bold mb-5 text-slate-200">{t("past_challenges")}</h2>
        <div className="space-y-6">
          {pastChallenges.map((challenge) => (
            <div key={challenge.id} className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <span className="text-xs text-slate-500 mb-1 block">
                    {lang === "ko"
                      ? `${challenge.year}년 ${challenge.week}주차`
                      : `Week ${challenge.week}, ${challenge.year}`
                    }
                  </span>
                  <h3 className="font-bold text-lg text-slate-100">{loc(challenge.title, lang)}</h3>
                </div>
                <span className="text-xs text-slate-500">{challenge.submissions.length}{t("submissions_count")}</span>
              </div>

              <p className="text-slate-400 text-sm mb-5">{loc(challenge.description, lang)}</p>

              {challenge.submissions.length > 0 && (
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">{t("top_submissions")}</p>
                  <div className="space-y-2">
                    {challenge.submissions.slice(0, 3).map((sub, rank) => (
                      <div key={sub.id} className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/50">
                        <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                          rank === 0 ? "bg-yellow-500 text-yellow-950" :
                          rank === 1 ? "bg-slate-400 text-slate-900" :
                          "bg-amber-700 text-amber-100"
                        }`}>{rank + 1}</span>
                        <InitialsAvatar name={sub.author} />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-slate-200">{sub.author}</p>
                          <p className="text-xs text-slate-400 truncate">{sub.description}</p>
                        </div>
                        <div className="flex items-center gap-3 text-xs text-slate-500 flex-shrink-0">
                          <span className="flex items-center gap-1"><Heart className="w-3 h-3" /> {sub.likes}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
