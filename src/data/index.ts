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

const experiences: { duration: string; title: string; descriptions: string[]; detail?: string[] }[] = [
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

const data = {
  skills,
  experiences,
};

export default data;
