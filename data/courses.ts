import { Course } from "@/types";

export const courses: Course[] = [
  {
    id: "level-0-env-setup",
    title: {
      en: "Setting Up Your Vibe Coding Environment",
      ko: "바이브 코딩 환경 설정하기",
    },
    description: {
      en: "Install all the tools you need to start building. No prior experience needed — we walk you through every single step.",
      ko: "개발 시작에 필요한 모든 도구를 설치하세요. 사전 경험 없이도 모든 단계를 안내해 드립니다.",
    },
    level: 0,
    levelLabel: {
      en: "Level 0: Environment Setup",
      ko: "Level 0: 환경 설정",
    },
    enrolledCount: 2847,
    totalDuration: "2 hours",
    thumbnail: "",
    tags: ["terminal", "Node.js", "VS Code", "Claude Code"],
    lessons: [
      {
        id: "lesson-0-1",
        courseId: "level-0-env-setup",
        title: { en: "Installing Node.js", ko: "Node.js 설치하기" },
        description: {
          en: "Download and configure Node.js, the engine that powers modern web development.",
          ko: "현대 웹 개발의 엔진인 Node.js를 다운로드하고 설정하세요.",
        },
        duration: "20 min",
        steps: [
          {
            id: "step-0-1-1",
            title: "What is Node.js and why do you need it?",
            content: "Node.js is a program that lets your computer run JavaScript code. Most modern coding tools — including Claude Code — need it installed. Think of it like installing a language plugin that your computer uses to understand your projects.\n\nDon't worry about understanding it deeply. You just need it installed and working.",
            codeBlocks: [],
            expectedOutput: undefined,
            troubleshootingFAQs: [],
          },
          {
            id: "step-0-1-2",
            title: "Download and install Node.js",
            content: "Go to nodejs.org and click the big green button that says \"LTS\" — this stands for Long Term Support, which means it's the stable, recommended version for beginners.\n\nRun the installer and click through all the default options. When it finishes, continue to the next step.",
            codeBlocks: [],
            expectedOutput: undefined,
            troubleshootingFAQs: [
              {
                question: "I see two download buttons — which one do I pick?",
                answer: "Always pick the LTS version (the left button). The 'Current' version is for advanced developers who want the newest features and don't mind occasional instability.",
              },
            ],
          },
          {
            id: "step-0-1-3",
            title: "Verify the installation",
            content: "Open your Terminal (Mac: press Cmd+Space, type 'Terminal', press Enter) or Command Prompt (Windows: press Windows key, type 'cmd', press Enter).\n\nType the commands below and press Enter after each one. You should see version numbers printed back at you.",
            codeBlocks: [
              {
                id: "cb-0-1-3-a",
                language: "bash",
                code: "node --version",
                label: "Check Node.js version",
              },
              {
                id: "cb-0-1-3-b",
                language: "bash",
                code: "npm --version",
                label: "Check npm version",
              },
            ],
            expectedOutput: "v20.11.0\n10.2.4",
            troubleshootingFAQs: [
              {
                question: "The terminal says 'command not found: node'",
                answer: "First, close and reopen your terminal completely — sometimes it needs to refresh. If it still fails, reinstall Node.js from nodejs.org. On Windows, make sure to check the box that says 'Add to PATH' during installation.",
              },
              {
                question: "I see a different version number — is that okay?",
                answer: "Yes! As long as you see a number like v18.x.x or v20.x.x, you're good. The exact version doesn't matter for our tutorials.",
              },
            ],
          },
        ],
      },
      {
        id: "lesson-0-2",
        courseId: "level-0-env-setup",
        title: { en: "Installing Claude Code", ko: "Claude Code 설치하기" },
        description: {
          en: "Install the Claude Code CLI — the AI coding assistant we'll use throughout all tutorials.",
          ko: "모든 튜토리얼에서 사용할 AI 코딩 어시스턴트 Claude Code CLI를 설치하세요.",
        },
        duration: "15 min",
        steps: [
          {
            id: "step-0-2-1",
            title: "What is Claude Code?",
            content: "Claude Code is a command-line tool made by Anthropic. You type instructions in plain English, and it writes, edits, and runs code for you. It's like having a developer sitting next to you who never gets tired or frustrated.\n\nYou'll use it by typing 'claude' in your terminal followed by what you want to build.",
            codeBlocks: [],
            expectedOutput: undefined,
            troubleshootingFAQs: [],
          },
          {
            id: "step-0-2-2",
            title: "Install Claude Code via npm",
            content: "Now that Node.js is installed, you have access to npm — the package manager we'll use to install tools. Run this command in your terminal:",
            codeBlocks: [
              {
                id: "cb-0-2-2-a",
                language: "bash",
                code: "npm install -g @anthropic-ai/claude-code",
                label: "Install Claude Code globally",
              },
            ],
            expectedOutput: "added 1 package in 3s",
            troubleshootingFAQs: [
              {
                question: "I get a 'permission denied' error",
                answer: "On Mac, try running the command with 'sudo' in front: sudo npm install -g @anthropic-ai/claude-code. You'll be asked to enter your Mac password.",
              },
            ],
          },
          {
            id: "step-0-2-3",
            title: "Verify Claude Code and log in",
            content: "Verify the installation, then run 'claude' to log in with your Anthropic account. If you don't have an account yet, it will prompt you to create one.",
            codeBlocks: [
              {
                id: "cb-0-2-3-a",
                language: "bash",
                code: "claude --version",
                label: "Check Claude Code version",
              },
              {
                id: "cb-0-2-3-b",
                language: "bash",
                code: "claude",
                label: "Start Claude Code and log in",
              },
            ],
            expectedOutput: "Claude Code v1.0.0\nWelcome! Please log in to continue...",
            troubleshootingFAQs: [
              {
                question: "'claude' is not recognized as a command",
                answer: "Close and reopen your terminal, then try again. If still not working, try running: npx @anthropic-ai/claude-code --version",
              },
            ],
          },
        ],
      },
      {
        id: "lesson-0-3",
        courseId: "level-0-env-setup",
        title: { en: "Your First Terminal Commands", ko: "첫 번째 터미널 명령어" },
        description: {
          en: "Learn the 5 terminal commands you'll use every single day.",
          ko: "매일 사용하게 될 5가지 터미널 명령어를 배워보세요.",
        },
        duration: "25 min",
        steps: [
          {
            id: "step-0-3-1",
            title: "Navigating folders with cd and ls",
            content: "The terminal is just another way to browse your computer's files — like Finder or File Explorer, but with text.\n\n'ls' lists what's in your current folder. 'cd' moves you into a folder. These two commands are 90% of your navigation.",
            codeBlocks: [
              {
                id: "cb-0-3-1-a",
                language: "bash",
                code: "ls",
                label: "List files in current folder",
              },
              {
                id: "cb-0-3-1-b",
                language: "bash",
                code: "cd Desktop",
                label: "Move into the Desktop folder",
              },
              {
                id: "cb-0-3-1-c",
                language: "bash",
                code: "cd ..",
                label: "Go back up one folder",
              },
            ],
            expectedOutput: "Documents  Downloads  Desktop  Pictures",
            troubleshootingFAQs: [],
          },
          {
            id: "step-0-3-2",
            title: "Creating your projects folder",
            content: "Let's create a dedicated folder for all your coding projects. This keeps everything organized.",
            codeBlocks: [
              {
                id: "cb-0-3-2-a",
                language: "bash",
                code: "cd ~",
                label: "Go to your home folder",
              },
              {
                id: "cb-0-3-2-b",
                language: "bash",
                code: "mkdir projects",
                label: "Create a projects folder",
              },
              {
                id: "cb-0-3-2-c",
                language: "bash",
                code: "cd projects",
                label: "Move into it",
              },
            ],
            expectedOutput: "",
            troubleshootingFAQs: [],
          },
        ],
      },
    ],
  },
  {
    id: "level-1-first-project",
    title: {
      en: "Build Your First Website in an Afternoon",
      ko: "오후 한 나절에 첫 웹사이트 만들기",
    },
    description: {
      en: "Create a real, live website from scratch using Claude Code. No coding knowledge required — just describe what you want.",
      ko: "Claude Code를 사용해 처음부터 실제 라이브 웹사이트를 만들어 보세요. 코딩 지식 없이도 원하는 것을 설명하기만 하면 됩니다.",
    },
    level: 1,
    levelLabel: {
      en: "Level 1: Your First Project",
      ko: "Level 1: 첫 프로젝트",
    },
    enrolledCount: 1923,
    totalDuration: "4 hours",
    thumbnail: "",
    tags: ["website", "Next.js", "Claude Code", "Vercel"],
    lessons: [
      {
        id: "lesson-1-1",
        courseId: "level-1-first-project",
        title: { en: "Creating a Next.js App with Claude Code", ko: "Claude Code로 Next.js 앱 만들기" },
        description: {
          en: "Use Claude Code to scaffold a complete Next.js project in under 5 minutes.",
          ko: "Claude Code를 사용해 5분 이내에 완전한 Next.js 프로젝트를 시작하세요.",
        },
        duration: "30 min",
        steps: [
          {
            id: "step-1-1-1",
            title: "Tell Claude what you want to build",
            content: "Open your terminal, navigate to your projects folder, and start Claude Code. Then just describe your website in plain English. Let's build a simple personal portfolio site.",
            codeBlocks: [
              {
                id: "cb-1-1-1-a",
                language: "bash",
                code: "cd ~/projects\nclaude",
                label: "Start Claude Code in your projects folder",
              },
            ],
            expectedOutput: "Welcome to Claude Code! What would you like to build?",
            troubleshootingFAQs: [],
          },
          {
            id: "step-1-1-2",
            title: "Your first vibe coding prompt",
            content: "In the Claude Code prompt, type your request. Be descriptive — the more detail you give, the better the result. Here's a starter prompt you can use or modify:",
            codeBlocks: [
              {
                id: "cb-1-1-2-a",
                language: "text",
                code: "Create a personal portfolio website using Next.js. It should have:\n- A hero section with my name and a short bio\n- A projects section showing 3 sample projects\n- A contact section with my email\n- A clean, modern dark design\n\nMake it look professional and polished.",
                label: "Your first vibe coding prompt",
              },
            ],
            expectedOutput: "Creating your portfolio website...\n✓ Initialized Next.js project\n✓ Created homepage with hero section\n✓ Added projects showcase\n✓ Built contact section",
            troubleshootingFAQs: [
              {
                question: "Claude generated something different from what I expected",
                answer: "That's normal! Vibe coding is iterative. Just follow up with 'Can you change the hero section to use a gradient background instead?' and Claude will adjust. You can keep refining until it looks exactly how you want.",
              },
            ],
          },
        ],
      },
      {
        id: "lesson-1-2",
        courseId: "level-1-first-project",
        title: { en: "Running Your Site Locally", ko: "로컬에서 사이트 실행하기" },
        description: {
          en: "See your website in a browser for the first time.",
          ko: "처음으로 브라우저에서 웹사이트를 확인해 보세요.",
        },
        duration: "15 min",
        steps: [
          {
            id: "step-1-2-1",
            title: "Start the development server",
            content: "Claude Code created all your files. Now let's run them! Navigate into your new project folder and start the local server.",
            codeBlocks: [
              {
                id: "cb-1-2-1-a",
                language: "bash",
                code: "cd my-portfolio\nnpm run dev",
                label: "Start your website locally",
              },
            ],
            expectedOutput: "▲ Next.js 14.0.0\n- Local: http://localhost:3000\n✓ Ready in 1.2s",
            troubleshootingFAQs: [
              {
                question: "I get an error about missing modules",
                answer: "Run 'npm install' first to install dependencies, then try 'npm run dev' again.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "level-2-real-world",
    title: {
      en: "Build a Full-Stack App with Auth & Database",
      ko: "인증 & 데이터베이스가 있는 풀스택 앱 만들기",
    },
    description: {
      en: "Go beyond static websites. Add user accounts, a real database, and dynamic features to your projects.",
      ko: "정적 웹사이트를 넘어서세요. 프로젝트에 사용자 계정, 실제 데이터베이스, 동적 기능을 추가하세요.",
    },
    level: 2,
    levelLabel: {
      en: "Level 2: Real-World Projects",
      ko: "Level 2: 실전 프로젝트",
    },
    enrolledCount: 876,
    totalDuration: "8 hours",
    thumbnail: "",
    tags: ["Supabase", "authentication", "database", "API"],
    lessons: [
      {
        id: "lesson-2-1",
        courseId: "level-2-real-world",
        title: { en: "Setting Up Supabase", ko: "Supabase 설정하기" },
        description: {
          en: "Create a free database in the cloud that stores your users and app data.",
          ko: "사용자와 앱 데이터를 저장하는 클라우드 무료 데이터베이스를 만드세요.",
        },
        duration: "30 min",
        steps: [
          {
            id: "step-2-1-1",
            title: "Create a Supabase project",
            content: "Supabase is a free database service that gives you user authentication, file storage, and a PostgreSQL database out of the box. Create a free account at supabase.com and click 'New Project'.",
            codeBlocks: [],
            expectedOutput: undefined,
            troubleshootingFAQs: [],
          },
        ],
      },
    ],
  },
  {
    id: "level-3-deployment",
    title: {
      en: "Ship It: Deploy Your App to the World",
      ko: "배포하기: 앱을 세상에 출시하기",
    },
    description: {
      en: "Get a custom domain, set up automatic deployments, and launch your app for real users to access.",
      ko: "커스텀 도메인을 얻고, 자동 배포를 설정하고, 실제 사용자들이 접근할 수 있도록 앱을 출시하세요.",
    },
    level: 3,
    levelLabel: {
      en: "Level 3: Deploy & Launch",
      ko: "Level 3: 배포 & 출시",
    },
    enrolledCount: 412,
    totalDuration: "6 hours",
    thumbnail: "",
    tags: ["Vercel", "deployment", "domains", "CI/CD", "monitoring"],
    lessons: [
      {
        id: "lesson-3-1",
        courseId: "level-3-deployment",
        title: { en: "Deploying to Vercel", ko: "Vercel에 배포하기" },
        description: {
          en: "Push your project live in under 5 minutes using Vercel's free tier.",
          ko: "Vercel 무료 티어를 사용해 5분 이내에 프로젝트를 배포하세요.",
        },
        duration: "20 min",
        steps: [
          {
            id: "step-3-1-1",
            title: "Connect your GitHub and deploy",
            content: "Vercel is the easiest way to deploy Next.js apps. Create a free account at vercel.com, connect your GitHub repository, and Vercel will automatically deploy your site every time you push code.",
            codeBlocks: [
              {
                id: "cb-3-1-1-a",
                language: "bash",
                code: "npx vercel",
                label: "Deploy from the terminal",
              },
            ],
            expectedOutput: "🎉 Your site is live at: https://my-portfolio.vercel.app",
            troubleshootingFAQs: [],
          },
        ],
      },
    ],
  },
];

export function getCourseById(id: string): Course | undefined {
  return courses.find((c) => c.id === id);
}
