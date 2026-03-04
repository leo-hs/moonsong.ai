import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ConditionalShell } from "@/components/layout/ConditionalShell";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MOONSONG.ai — Something Big is Coming",
  description:
    "We're building the next-gen coding education platform — interactive courses, real-world projects, and a community that actually vibes with your learning style.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-slate-950 text-slate-100 min-h-screen flex flex-col`}>
        <LanguageProvider>
          <ConditionalShell>
            {children}
          </ConditionalShell>
        </LanguageProvider>
      </body>
    </html>
  );
}
