"use client";
import { projects, qaThreads, templates } from "@/data/community";
import { Heart, MessageSquare, Check, Download, ExternalLink, ChevronUp } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from "@/contexts/LanguageContext";
import { loc } from "@/lib/utils";

function InitialsAvatar({ name, size = "sm" }: { name: string; size?: "sm" | "md" }) {
  const initials = name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);
  const colors = ["bg-indigo-600", "bg-purple-600", "bg-cyan-600", "bg-green-600", "bg-orange-600"];
  const color = colors[name.charCodeAt(0) % colors.length];
  const sz = size === "sm" ? "w-7 h-7 text-xs" : "w-9 h-9 text-sm";
  return (
    <div className={`${sz} ${color} rounded-full flex items-center justify-center text-white font-bold flex-shrink-0`}>
      {initials}
    </div>
  );
}

export default function CommunityPage() {
  const { lang, t } = useLanguage();

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">{t("community_title")}</h1>
        <p className="text-slate-400">{t("community_subtitle")}</p>
      </div>

      <Tabs defaultValue="showcase">
        <TabsList className="bg-slate-900 border border-slate-800 mb-8">
          <TabsTrigger value="showcase" className="data-[state=active]:bg-indigo-600 data-[state=active]:text-white">
            {t("tab_showcase")}
          </TabsTrigger>
          <TabsTrigger value="qa" className="data-[state=active]:bg-indigo-600 data-[state=active]:text-white">
            {t("tab_qa")}
          </TabsTrigger>
          <TabsTrigger value="templates" className="data-[state=active]:bg-indigo-600 data-[state=active]:text-white">
            {t("tab_templates")}
          </TabsTrigger>
        </TabsList>

        {/* Showcase */}
        <TabsContent value="showcase">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project) => (
              <div key={project.id} className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex flex-col hover:border-slate-700 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <InitialsAvatar name={project.author} size="md" />
                  <div>
                    <p className="text-sm font-semibold text-slate-100">{project.author}</p>
                  </div>
                </div>

                <h3 className="font-bold text-slate-100 mb-2">{project.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="text-xs px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700">{tech}</span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-slate-800">
                  <button className="flex items-center gap-1.5 text-slate-500 hover:text-pink-400 transition-colors text-sm">
                    <Heart className="w-4 h-4" /> {project.likes}
                  </button>
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-indigo-400 hover:text-indigo-300 text-xs font-medium transition-colors">
                      {t("view_live")} <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        {/* Q&A */}
        <TabsContent value="qa">
          <div className="space-y-3">
            {qaThreads.map((thread) => (
              <div key={thread.id} className="bg-slate-900 border border-slate-800 rounded-xl p-5 hover:border-slate-700 transition-colors">
                <div className="flex gap-4">
                  <div className="flex flex-col items-center gap-1 text-center min-w-[40px]">
                    <button className="text-slate-500 hover:text-indigo-400 transition-colors">
                      <ChevronUp className="w-5 h-5" />
                    </button>
                    <span className="text-sm font-bold text-slate-300">{thread.votes}</span>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="font-semibold text-slate-100 leading-snug">{thread.question}</h3>
                      {thread.solved && (
                        <span className="flex-shrink-0 flex items-center gap-1 text-xs text-green-400 bg-green-400/10 border border-green-400/30 px-2 py-0.5 rounded-full">
                          <Check className="w-3 h-3" /> {t("solved")}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {thread.tags.map((tag) => (
                        <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700">{tag}</span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 text-xs text-slate-500">
                      <div className="flex items-center gap-1.5">
                        <InitialsAvatar name={thread.author} size="sm" />
                        <span>{thread.author}</span>
                      </div>
                      <span className="flex items-center gap-1">
                        <MessageSquare className="w-3.5 h-3.5" /> {thread.answers}{t("answers")}
                      </span>
                      <span>{thread.createdAt}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        {/* Templates */}
        <TabsContent value="templates">
          <div className="grid sm:grid-cols-2 gap-5">
            {templates.map((tpl) => (
              <div key={tpl.id} className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors">
                <h3 className="font-bold text-lg text-slate-100 mb-2">{loc(tpl.name, lang)}</h3>
                <p className="text-slate-400 text-sm mb-4">{loc(tpl.description, lang)}</p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {tpl.stack.map((s) => (
                    <span key={s} className="text-xs px-2 py-0.5 rounded-full bg-indigo-600/20 text-indigo-300 border border-indigo-600/40">{s}</span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500">{tpl.usedBy.toLocaleString()}{t("builders_used")}</span>
                  <button className="flex items-center gap-1.5 text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors">
                    <Download className="w-4 h-4" /> {t("download")}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
