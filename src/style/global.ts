import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,
*::after,
*::before {
  margin: 0;
  padding: 0;
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

body {
  font-family: 'Poppins', sans-serif;
  width: 100vw;
  overflow-x: hidden;
  position: relative;
  color: #f8f8f8;
  background-color: #242424;
}

ul,li {
  list-style: none;
}

a {
  text-decoration: none;
}

h2 {
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.appColor};
  font-size: ${({ theme }) => theme.fontSize.medium1};
  font-weight: 700;
}
`;

const color = {
  appColor: "#F04545",
  fontColor: "#222",
  white: "#f8f8f8",
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
  color,
  fontSize,
  mixins,
};

export default GlobalStyle;
