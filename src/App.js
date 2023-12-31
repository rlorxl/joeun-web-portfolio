import { useEffect } from "react";
import { styled } from "styled-components";
import { gsap } from "gsap";
import About from "./components/About.tsx";
import Main from "./components/Main.tsx";
import Navigation from "./components/Navigation.tsx";
import Works from "./components/Works.tsx";
import Article from "./components/Article.tsx";
import Contact from "./components/Contact.tsx";
import Cursor from "./ui/Cursor.tsx";
import useMouse from "./hooks/useMouse.tsx";

function App() {
  const [mousemoveHandler] = useMouse();

  useEffect(() => {
    gsap.to(".heading", {
      delay: 0.5,
      duration: 0.5,
      y: 0,
      opacity: 1,
      ease: "power3,Out",
    });
  }, []);

  return (
    <div onMouseMove={mousemoveHandler} style={{ position: "relative" }}>
      <Cursor />
      <Navigation />
      <Logo className="heading">Joeun lee web portfolio</Logo>
      <main className="main">
        <Main />
        <About />
        <Works />
        <Article />
        <Contact />
      </main>
    </div>
  );
}

export default App;

const Logo = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.medium1};
  color: ${({ theme }) => theme.color.white};
  text-transform: uppercase;
  position: absolute;
  top: 25px;
  left: 35px;
  font-weight: 400;
  transform: translateY(-80%);
  opacity: 0;

  @media screen and (max-width: 425px) {
    font-size: ${({ theme }) => theme.fontSize.medium2};
  }
`;
