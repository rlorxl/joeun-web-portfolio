import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import GlobalStyle, { theme } from "./style/global.ts";
import App from "./App";
import { CursorProvider } from "./context/cursor.tsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <CursorProvider>
        <App />
      </CursorProvider>
    </ThemeProvider>
  </React.StrictMode>
);
