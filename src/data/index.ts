import * as Images from "../assets/works/index.ts";

type Experiences = {
  duration: string;
  title: string;
  descriptions: string[];
  detail?: string[];
};

type Projects = {
  id: string;
  name: string;
  date: string;
  src: { path: string; alt: string };
  stack: string[];
  description: string[];
  link: string;
  portfolioLink?: string;
  githubLink?: string;
};

const skills: string[] = [
  "Javascript",
  "React",
  "Next.js",
  "Typescript",
  "SCSS",
  "Styled-components",
  "Tailwind",
  "Redux",
  "thunk",
  "React-query",
  "Git",
  "mongodb",
  "Prisma",
  "Figma",
  "Photoshop",
  "illustrator",
];

const experiences: Experiences[] = [
  {
    duration: "2022.12 - 2022.01",
    title: "원티드 프리온보딩 프론트엔드 인턴십",
    descriptions: ["주마다 기업과제 수행", "5인 이상 팀단위로 best practice를 논의하며 학습"],
  },
  {
    duration: "2022.05 - 2022.09",
    detail: ["온라인 (2022.02~2022.05)", "오프라인 (2022.05~2022.09)"],
    title: "제로베이스 프론트엔드 스쿨 1기 우수수강생",
    descriptions: [
      "HTML/CSS와 웹표준, 웹 접근성에 대한 학습",
      "JavaScript Deep Dive로 JavaScript 동작원리에 대한 심도깊은 학습",
    ],
  },
  {
    duration: "2019.07 - 2020.08",
    title: "피터오세아 그래픽, 웹디자이너",
    descriptions: ["디자인 에이전시", "브랜딩, 편집, 웹디자인 업무"],
  },
  {
    duration: "2018.08 - 2019.01",
    title: "디자인나스 UX/UI 디자인 과정 수료",
    descriptions: ["웹디자이너 전문 교육 기관", "UX/UI 디자인 포트폴리오 제작"],
  },
  {
    duration: "2017.08 - 2018.05",
    title: "vl cosmetics 디자이너",
    descriptions: ["기업을 대상으로하는 화장품 orm전문 기업", "패키지 디자인, 회사 홍보 웹사이트 제작"],
  },
  {
    duration: "2014.03 - 2014.08",
    title: "sbs아카데미 웹디자인 과정 수료",
    descriptions: ["photoshop, illustrator학습", "HTML5, CSS, jquery의 기초 교육과정"],
  },
  {
    duration: "2012.03 - 2017.02",
    title: "청주대학교 예술대학 시각디자인 전공 졸업",
    descriptions: ["졸업준비위원회 멀티미디어 디자인 팀장"],
  },
];

const projects: Projects[] = [
  {
    id: "project1",
    name: "개인 블로그",
    date: "2023.09",
    src: {
      path: Images.default.work1,
      alt: "프로젝트1",
    },
    stack: ["Next.js", "Typescript", "Tailwind", "Recoil"],
    description: [
      "Next.js의 이해도를 높이고 하나뿐인 블로그를 만들기 위해 개발중",
      "cookie를 활용한 다크모드를 구현하고, 페이지별 메타태그를 적용",
    ],
    link: "https://rlorxl.me",
  },
  {
    id: "project2",
    name: "판다",
    date: "2023.01 ~ 2023.04",
    src: {
      path: Images.default.work2,
      alt: "프로젝트2",
    },
    stack: ["Next.js", "Typescript", "Tailwind", "Recoil", "React-query", "prisma", "S3"],
    description: [
      "중고 거래 & 렌탈 커머스 사이트 웹앱",
      "전체 ui설계와 페이지를 기획",
      "실제 사용되는 이커머스 플랫폼이라고 가정하고 게시물 업로드 로직을 구현",
      "서버리스db를 활용하여 유저별 데이터를 관리",
    ],
    link: "https://panda-vert.vercel.app/",
    portfolioLink: "https://notion.so/Panda-6261ca29817949c2b93448910f6a4c90",
  },
  {
    id: "project3",
    name: "시외버스 예매",
    date: "2022.10",
    src: {
      path: Images.default.work3,
      alt: "프로젝트3",
    },
    stack: ["React", "Styled-components", "Redux", "ContextAPI", "Firebase"],
    description: [
      "Open API를 이용한  시외버스 예매 기능 구현하기",
      "Firebase Authentication을 이용한 로그인, 회원가입",
      "jwt로 유저의 인증을 확인하고 이에 따른 동적 라우팅 구현",
    ],
    link: "https://react-tmoney-bus.vercel.app/login",
    portfolioLink: "https://www.notion.so/7c0fe83095b548c9be68bfd8154b0f2d",
  },
  {
    id: "project4",
    name: "RIDI Webtoon",
    date: "2022.08",
    src: {
      path: Images.default.work4,
      alt: "프로젝트4",
    },
    stack: ["Javascript", "SCSS"],
    description: ["RIDI Webtoon 클론&개선 프로젝트", "바닐라 자바스크립트로 RIDI웹툰 사이트를 클론코딩하여 SPA를 구현"],
    link: "https://ridiwebtoon-clone-1f3ce80a7f8e.herokuapp.com/",
    portfolioLink: "https://www.notion.so/RIDI-2e70feca707e45f1b4ce1ad1de69cf84",
  },
  {
    id: "project5",
    name: "Melon 웹사이트",
    date: "2023.07",
    src: {
      path: Images.default.work5,
      alt: "프로젝트5",
    },
    stack: ["Javascript", "SCSS"],
    description: ["Melon 웹사이트 클론 & 개선 프로젝트", "클론코딩, 반응형 구현"],
    link: "https://rlorxl.github.io/responsive-website-melon.github.io/",
    githubLink: "https://github.com/rlorxl/responsive-website-melon.github.io",
  },
];

const data = {
  skills,
  experiences,
  projects,
};

export default data;
