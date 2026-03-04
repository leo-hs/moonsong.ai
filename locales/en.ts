const en = {
  // Language toggle (shows the target language)
  lang_toggle: "한국어",

  // Navbar
  nav_courses: "Courses",
  nav_community: "Community",
  nav_challenges: "Challenges",
  nav_profile: "Profile",
  nav_start_learning: "Start Learning",

  // Footer
  footer_tagline: "Building the best place on the internet to learn vibe coding — no experience required.",
  footer_learn: "Learn",
  footer_all_courses: "All Courses",
  footer_weekly_challenges: "Weekly Challenges",
  footer_community: "Community",
  footer_showcase: "Showcase",
  footer_qa_board: "Q&A Board",
  footer_templates: "Templates",
  footer_copyright: "© 2025 VibeCode Academy. All rights reserved.",

  // Landing Hero
  hero_badge: "New: Claude Code + Codex CLI tutorials live",
  hero_h1_pre: "Build real apps with",
  hero_h1_highlight: "zero coding experience",
  hero_h1_post: "",
  hero_subtitle: "VibeCode Academy teaches you to use AI coding tools like Claude Code to build and deploy real software — even if you've never written a line of code.",
  hero_cta_start: "Start for free",
  hero_cta_browse: "Browse courses",
  hero_social_1: "2,800+ learners enrolled",
  hero_social_2: "4 progressive levels",
  hero_social_3: "Free to start",

  // Landing Features
  features_heading: "Why VibeCode Academy?",
  features_subtitle: "Other tutorials assume you already know what you're doing. We start from zero.",
  feature_cli_title: "CLI-First Learning",
  feature_cli_desc: "We start from scratch — installing tools, understanding the terminal, and making it feel natural. Zero experience assumed.",
  feature_projects_title: "Build Real Projects",
  feature_projects_desc: "Every level ends with a real, deployed project you built yourself. Not toy examples — actual services you can share.",
  feature_community_title: "Supportive Community",
  feature_community_desc: "Get unstuck fast. Our community of vibe coders answers questions, shares projects, and celebrates wins together.",
  feature_challenges_title: "Weekly Challenges",
  feature_challenges_desc: "Build something new every week with guided challenges. Level up your skills and see how others approach the same problem.",

  // Landing Courses section
  courses_heading: "Your learning path",
  courses_subtitle: "Four levels that take you from zero to shipped.",
  courses_view_all: "View all courses",

  // Landing Testimonials
  testimonials_heading: "Built by learners like you",
  testimonials_subtitle: "No coding background required — just curiosity.",

  // Landing CTA
  cta_heading: "Ready to build your first thing?",
  cta_subtitle: "Start with Level 0 — it's free, and you'll have your environment set up in under 2 hours.",
  cta_button: "Start Level 0 — Free",

  // Courses page
  courses_page_title: "All Courses",
  courses_page_subtitle: "Learn at your own pace, from zero to shipped.",
  filter_all: "All Levels",
  filter_level_0: "Level 0: Setup",
  filter_level_1: "Level 1: First Project",
  filter_level_2: "Level 2: Real-World",
  filter_level_3: "Level 3: Deploy",
  course_start: "Start",
  // Number suffix pattern: put space in EN so number+t(key) works cleanly in both languages
  course_enrolled_suffix: " enrolled",

  // Challenges page
  challenges_title: "Weekly Challenges",
  challenges_subtitle: "Build something new every week. Gain skills. Share results.",
  this_weeks_challenge: "This Week's Challenge",
  deadline: "Deadline:",
  requirements: "Requirements",
  submit_solution: "Submit My Solution",
  early_submissions: "Early Submissions",
  past_challenges: "Past Challenges",
  submissions_count: " submissions",
  top_submissions: "Top Submissions",

  // Profile page
  profile_points: "Points",
  profile_day_streak: "Day streak",
  profile_rank: "Rank",
  course_progress_title: "Course Progress",
  lessons_suffix: " lessons",
  badges_title: "Badges",
  locked_badge: "Locked:",
  recent_activity: "Recent Activity",
  leaderboard_title: "Leaderboard",
  pts_suffix: " pts",

  // Community page
  community_title: "Community",
  community_subtitle: "Share projects, ask questions, and discover starter templates.",
  tab_showcase: "Project Showcase",
  tab_qa: "Q&A Board",
  tab_templates: "Templates",
  view_live: "View live",
  answers: " answers",
  builders_used: " builders used this",
  download: "Download",
  solved: "Solved",

  // Lesson components
  step_label: "Step ",
  step_separator: " of ",
  step_suffix: "",
  expected_output: "Expected output",
  troubleshooting: "Troubleshooting",
  nav_previous: "Previous",
  nav_next: "Next",
  nav_complete_course: "Complete Course",
  sidebar_course_label: "Course",
} as const;

export default en;
// TranslationKey is inferred from the keys; Translations uses string values so ko.ts can assign different strings
export type TranslationKey = keyof typeof en;
export type Translations = Record<TranslationKey, string>;
