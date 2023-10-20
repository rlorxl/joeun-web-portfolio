import { useEffect } from "react";
import { gsap } from "gsap";
import styled from "styled-components";
import About from "./components/About.tsx";
import Main from "./components/Main.tsx";
import Navigation from "./components/Navigation.tsx";
import Works from "./components/Works.tsx";
import Contact from "./components/Contact.tsx";
import Cursor from "./ui/Cursor.tsx";
import useMouse from "./hooks/useMouse.tsx";

function App() {
  const [mousemoveHandler] = useMouse();

  return (
    <div className="App" onMouseMove={mousemoveHandler}>
      {/* {Array(8)
        .fill("")
        .map((_, i) => (
          <Overlay key={i} className="overlay" />
        ))} */}
      <Cursor />
      <Navigation />
      <main>
        <Main />
        <About />
        <Works />
        {/* <Contact /> */}
      </main>
    </div>
  );
}

export default App;

const Overlay = styled.div`
  width: 20%;
  height: 100vh;
  background: ${({ theme }) => theme.color.appColor};
  position: absolute;
  top: 0;
  z-index: 1000;

  &:nth-child(2) {
    left: 12.5%;
  }
  &:nth-child(3) {
    left: 25%;
  }
  &:nth-child(4) {
    left: 37.5%;
  }
  &:nth-child(5) {
    left: 50%;
  }
  &:nth-child(6) {
    left: 62.5%;
  }
  &:nth-child(7) {
    left: 80%;
  }
  &:nth-child(8) {
    left: 92.5%;
  }
`;
