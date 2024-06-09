import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
  --global-width: 1280px;
  --max-width: 1440px;

}

*,
*::after,
*::before {
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

*::-webkit-scrollbar, 
html::-webkit-scrollbar, 
body::-webkit-scrollbar {
  background-color: #222;
}

*::-webkit-scrollbar-thumb, 
html::-webkit-scrollbar-thumb, 
body::-webkit-scrollbar-thumb {
  background-color: #A4A2A2;
  border-radius: 99em;
  border: 6px solid #222;
}

body {
  font-family: 'Poppins', sans-serif;
  width: 100vw;
  color: #111;
  background: ${({ theme }) => theme.color.backgroundColor};
  position: relative;
  overflow-x: hidden;

  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none;
  cursor: none;
}

section {
  position: relative;
  background: ${({ theme }) => theme.color.backgroundColor};
}

div,
section,
header,
footer,
p,
h1,
h2 {
  box-sizing: border-box;
}

ul,li {
  list-style: none;
}

a {
  text-decoration: none;
  color: #f0f0f0;
  cursor: none;
}

h1, h2 {
  font-weight: 700;
}

h2 {
  color: ${({ theme }) => theme.color.appColor};
  font-size: ${({ theme }) => theme.fontSize.large};
}
`;

const global = {
  globalWidth: "1280px",
  maxWidth: "1440px",
};

const color = {
  appColor: "#F04545",
  fontColor: "#222",
  darkmodeColor: "#C5C5C5",
  backgroundColor: "#f4f4f4",
  darkmodeBackgroundColor: "#242424",
  white: "#f8f8f8",
  black: "#222",
  borderColor: "#A4A2A2",
};

const fontSize = {
  "4xl": "calc(1rem + 6vw)",
  large: "calc(1rem + 1.4vw)",
  medium1: "1.5rem",
  medium2: "1.2rem",
  base: "1rem",
  small: "0.8rem",
  xs: "0.7rem",
};

const mixins = {
  flexBox: (obj: { direction?: string; align?: string; justify?: string }) =>
    `
    display: flex;
    flex-direction: ${obj?.direction ?? "row"};
    justify-content: ${obj?.justify ?? "center"};
    align-items: ${obj?.align ?? "center"};
  `,
};

export const theme = {
  global,
  color,
  fontSize,
  mixins,
};

export default GlobalStyle;
