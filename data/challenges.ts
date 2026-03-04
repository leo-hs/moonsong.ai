import { Challenge } from "@/types";

export const challenges: Challenge[] = [
  {
    id: "challenge-9",
    week: 9,
    year: 2025,
    title: {
      en: "Build a Real-Time Chat UI",
      ko: "실시간 채팅 UI 만들기",
    },
    description: {
      en: "Create a chat interface that feels alive. Design the UI with message bubbles, timestamps, and user avatars. Bonus points for adding a typing indicator animation.",
      ko: "생동감 넘치는 채팅 인터페이스를 디자인하세요. 메시지 말풍선, 타임스탬프, 사용자 아바타로 UI를 구성하세요. 타이핑 인디케이터 애니메이션을 추가하면 보너스 점수!",
    },
    requirements: [
      {
        en: "Display a list of messages with sender name, avatar, and timestamp",
        ko: "발신자 이름, 아바타, 타임스탬프가 포함된 메시지 목록 표시",
      },
      {
        en: "Style your own messages differently from others' messages",
        ko: "내 메시지와 상대방 메시지를 다르게 스타일링",
      },
      {
        en: "Add an input field and send button",
        ko: "입력 필드와 전송 버튼 추가",
      },
      {
        en: "Bonus: Add a typing indicator that animates",
        ko: "보너스: 애니메이션 타이핑 인디케이터 추가",
      },
    ],
    submissions: [
      {
        id: "sub-9-1",
        challengeId: "challenge-9",
        author: "ChatBuilder",
        authorAvatar: "",
        projectUrl: "#",
        description: "Added animated typing dots and emoji reactions!",
        likes: 34,
      },
      {
        id: "sub-9-2",
        challengeId: "challenge-9",
        author: "UIDesigner",
        authorAvatar: "",
        projectUrl: "#",
        description: "Dark mode with gradient message bubbles",
        likes: 28,
      },
    ],
    deadline: "2025-03-05",
    isCurrent: true,
  },
  {
    id: "challenge-8",
    week: 8,
    year: 2025,
    title: {
      en: "Build a Pomodoro Timer",
      ko: "포모도로 타이머 만들기",
    },
    description: {
      en: "Create a productivity timer app using the Pomodoro technique — 25 minutes of work, 5 minute break. Show a visual countdown and play a sound when the timer ends.",
      ko: "포모도로 기법을 사용한 생산성 타이머 앱을 만드세요 — 25분 작업, 5분 휴식. 시각적 카운트다운을 보여주고 타이머 종료 시 소리를 재생하세요.",
    },
    requirements: [
      {
        en: "25-minute work timer and 5-minute break timer",
        ko: "25분 작업 타이머와 5분 휴식 타이머",
      },
      {
        en: "Visual circular progress indicator",
        ko: "시각적 원형 진행 표시기",
      },
      {
        en: "Start, pause, and reset controls",
        ko: "시작, 일시정지, 리셋 컨트롤",
      },
      {
        en: "Sound or notification when timer completes",
        ko: "타이머 완료 시 소리 또는 알림",
      },
    ],
    submissions: [
      {
        id: "sub-8-1",
        challengeId: "challenge-8",
        author: "ProductivityPro",
        authorAvatar: "",
        projectUrl: "#",
        description: "Added custom timer settings and task tracking",
        likes: 67,
      },
      {
        id: "sub-8-2",
        challengeId: "challenge-8",
        author: "FocusFirst",
        authorAvatar: "",
        projectUrl: "#",
        description: "Beautiful minimal design with ambient sounds",
        likes: 89,
      },
      {
        id: "sub-8-3",
        challengeId: "challenge-8",
        author: "TimerTech",
        authorAvatar: "",
        projectUrl: "#",
        description: "PWA with background notifications",
        likes: 45,
      },
    ],
    deadline: "2025-02-26",
    isCurrent: false,
  },
  {
    id: "challenge-7",
    week: 7,
    year: 2025,
    title: {
      en: "Weather Dashboard",
      ko: "날씨 대시보드",
    },
    description: {
      en: "Build a weather dashboard using a free weather API. Display current conditions, a 5-day forecast, and make it look beautiful with icons and gradients based on the weather.",
      ko: "무료 날씨 API를 사용한 날씨 대시보드를 만드세요. 현재 상태, 5일 예보를 표시하고 날씨에 따른 아이콘과 그라디언트로 아름답게 만드세요.",
    },
    requirements: [
      {
        en: "Fetch and display current weather for a location",
        ko: "위치에 대한 현재 날씨 가져오기 및 표시",
      },
      {
        en: "Show 5-day forecast",
        ko: "5일 예보 표시",
      },
      {
        en: "Dynamic background or icons based on weather conditions",
        ko: "날씨 조건에 따른 동적 배경 또는 아이콘",
      },
      {
        en: "Bonus: Add location search",
        ko: "보너스: 위치 검색 추가",
      },
    ],
    submissions: [
      {
        id: "sub-7-1",
        challengeId: "challenge-7",
        author: "WeatherWatcher",
        authorAvatar: "",
        projectUrl: "#",
        description: "Animated weather backgrounds that match conditions!",
        likes: 112,
      },
      {
        id: "sub-7-2",
        challengeId: "challenge-7",
        author: "DataVizDev",
        authorAvatar: "",
        projectUrl: "#",
        description: "Added humidity/wind charts using Recharts",
        likes: 78,
      },
    ],
    deadline: "2025-02-19",
    isCurrent: false,
  },
  {
    id: "challenge-6",
    week: 6,
    year: 2025,
    title: {
      en: "Recipe Box",
      ko: "레시피 박스",
    },
    description: {
      en: "Build a recipe app where users can browse, save, and search recipes. Use a free recipe API or create your own mock data.",
      ko: "사용자가 레시피를 탐색, 저장, 검색할 수 있는 레시피 앱을 만드세요. 무료 레시피 API를 사용하거나 직접 목업 데이터를 만들어도 됩니다.",
    },
    requirements: [
      {
        en: "Browse a list of recipes with images",
        ko: "이미지가 있는 레시피 목록 탐색",
      },
      {
        en: "Search/filter by ingredient or cuisine",
        ko: "재료 또는 요리 방법으로 검색/필터",
      },
      {
        en: "Recipe detail page with ingredients and steps",
        ko: "재료 및 단계가 있는 레시피 상세 페이지",
      },
      {
        en: "Bonus: Save favorites to localStorage",
        ko: "보너스: 즐겨찾기를 localStorage에 저장",
      },
    ],
    submissions: [
      {
        id: "sub-6-1",
        challengeId: "challenge-6",
        author: "FoodieFirst",
        authorAvatar: "",
        projectUrl: "#",
        description: "Built a full recipe management app with Claude Code in 3 hours",
        likes: 94,
      },
    ],
    deadline: "2025-02-12",
    isCurrent: false,
  },
  {
    id: "challenge-5",
    week: 5,
    year: 2025,
    title: {
      en: "Kanban Board",
      ko: "칸반 보드",
    },
    description: {
      en: "Build a simple Kanban-style task board with columns for To Do, In Progress, and Done. Tasks should be moveable between columns.",
      ko: "할 일, 진행 중, 완료 컬럼이 있는 간단한 칸반식 작업 보드를 만드세요. 작업은 컬럼 간에 이동 가능해야 합니다.",
    },
    requirements: [
      {
        en: "Three columns: To Do, In Progress, Done",
        ko: "세 개의 컬럼: 할 일, 진행 중, 완료",
      },
      {
        en: "Add and delete tasks",
        ko: "작업 추가 및 삭제",
      },
      {
        en: "Move tasks between columns",
        ko: "컬럼 간 작업 이동",
      },
      {
        en: "Bonus: Drag and drop support",
        ko: "보너스: 드래그 앤 드롭 지원",
      },
    ],
    submissions: [
      {
        id: "sub-5-1",
        challengeId: "challenge-5",
        author: "ProjectManager",
        authorAvatar: "",
        projectUrl: "#",
        description: "Full drag-and-drop with localStorage persistence",
        likes: 143,
      },
      {
        id: "sub-5-2",
        challengeId: "challenge-5",
        author: "AgileAlex",
        authorAvatar: "",
        projectUrl: "#",
        description: "Added due dates, priorities, and team member assignment",
        likes: 107,
      },
    ],
    deadline: "2025-02-05",
    isCurrent: false,
  },
];

export const currentChallenge = challenges.find((c) => c.isCurrent);
export const pastChallenges = challenges.filter((c) => !c.isCurrent);
