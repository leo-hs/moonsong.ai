export type CourseLevel = 0 | 1 | 2 | 3;
export type Language = "en" | "ko";
export type LocalizedString = { en: string; ko: string };

export interface CodeBlock {
  id: string;
  language: string;
  code: string;
  label?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface LessonStep {
  id: string;
  title: string;
  content: string;
  codeBlocks: CodeBlock[];
  expectedOutput?: string;
  screenshotUrl?: string;
  troubleshootingFAQs: FAQ[];
}

export interface Lesson {
  id: string;
  courseId: string;
  title: LocalizedString;
  description: LocalizedString;
  duration: string;
  steps: LessonStep[];
}

export interface Course {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  level: CourseLevel;
  levelLabel: LocalizedString;
  lessons: Lesson[];
  totalDuration: string;
  thumbnail: string;
  tags: string[];
  enrolledCount: number;
}

export interface Project {
  id: string;
  title: string;
  author: string;
  authorAvatar: string;
  description: string;
  techStack: string[];
  likes: number;
  thumbnail: string;
  liveUrl?: string;
}

export interface QAThread {
  id: string;
  question: string;
  author: string;
  authorAvatar: string;
  answers: number;
  votes: number;
  tags: string[];
  createdAt: string;
  solved: boolean;
}

export interface Template {
  id: string;
  name: LocalizedString;
  description: LocalizedString;
  stack: string[];
  downloadUrl: string;
  usedBy: number;
}

export interface Challenge {
  id: string;
  week: number;
  year: number;
  title: LocalizedString;
  description: LocalizedString;
  requirements: LocalizedString[];
  submissions: Submission[];
  deadline: string;
  isCurrent: boolean;
}

export interface Submission {
  id: string;
  challengeId: string;
  author: string;
  authorAvatar: string;
  projectUrl: string;
  description: string;
  likes: number;
}

export interface Badge {
  id: string;
  name: LocalizedString;
  description: LocalizedString;
  icon: string;
  earned: boolean;
  earnedAt?: string;
  category: "course" | "community" | "challenge" | "streak";
}

export interface UserActivity {
  id: string;
  type: "lesson_complete" | "badge_earned" | "project_submitted" | "challenge_won";
  description: string;
  timestamp: string;
}

export interface UserCourseProgress {
  courseId: string;
  completedLessons: number;
  totalLessons: number;
  lastAccessed: string;
}

export interface UserProfile {
  id: string;
  name: string;
  username: string;
  avatarUrl: string;
  bio: string;
  joinedAt: string;
  points: number;
  streak: number;
  rank: number;
  badges: Badge[];
  courseProgress: UserCourseProgress[];
  activity: UserActivity[];
}

export interface LeaderboardEntry {
  rank: number;
  userId: string;
  name: string;
  avatarUrl: string;
  points: number;
  streak: number;
}
