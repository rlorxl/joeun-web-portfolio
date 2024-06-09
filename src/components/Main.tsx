/* eslint-disable object-shorthand */
import React, { useContext, useLayoutEffect, useRef, useState } from "react";
import { styled, keyframes } from "styled-components";
// eslint-disable-next-line import/no-extraneous-dependencies
import TypingText from "./main/TypingText.tsx";
import PopupText from "./main/PopupText.tsx";
import CursorContext from "../context/cursor.tsx";

const Main = () => {
  const { expandHandler } = useContext(CursorContext);
  const [moveWidth, setMoveWidth] = useState<number>(0);

  const p2 = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    const setElementWidth = () => {
      if (!p2.current) return;
      let translateWidth = p2.current.clientWidth;
      setMoveWidth(translateWidth);
    };

    setElementWidth();
    window.addEventListener("resize", setElementWidth);
  }, []);

  return (
    <MainWrap>
      <InnerBox>
        <Greeting onMouseEnter={expandHandler} onMouseLeave={expandHandler}>
          <TypingText text={["Hello", "안녕하세요", "こんにちは", "Bonjour", "Hola!"]} />
          <Name style={{ marginLeft: "60px" }}>I'm Joeun,</Name>
        </Greeting>
        <PopupTextBox>
          <PopupText text={["Sensible", "Flexible", "Steady"]} />
          <Star onMouseEnter={expandHandler} onMouseLeave={expandHandler}>
            *
          </Star>
        </PopupTextBox>
        <MarqueeText movewidth={moveWidth + 50} onMouseEnter={expandHandler} onMouseLeave={expandHandler}>
          {Array(2)
            .fill("")
            .map(item => (
              <p className="p2" ref={p2}>
                Frontend Developer *
              </p>
            ))}
        </MarqueeText>
      </InnerBox>
    </MainWrap>
  );
};

export default Main;

const MainWrap = styled.section`
  position: sticky;
  top: 0;
  height: calc(100vh - 100px);
  padding: 0 8rem;
  ${({ theme }) => theme.mixins.flexBox()};
  font-family: "Montserrat", sans-serif;
  font-size: calc(1.2rem + 6vw);
  font-weight: 600;
  /* z-index: -1; */

  p {
    white-space: nowrap;
  }

  span {
    white-space: nowrap;
  }

  @media screen and (max-width: 768px) {
    padding: 0 5rem;
  }

  @media screen and (max-width: 425px) {
    padding: 0 3rem;
  }
`;

const InnerBox = styled.div`
  width: 1400px;
  max-width: 1800px;
  position: relative;
  overflow: hidden;
`;

const Greeting = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 45px;

  /* @media screen and (max-width: 980px) {
    flex-direction: column;
    align-items: flex-start;
    grid-column: 1 / span 3;

    span:nth-child(1) {
      min-height: 50%;
    }
    span:nth-child(2) {
      margin-left: 0 !important;
    }
  } */
`;

const Name = styled.span`
  display: inline-block;
  position: relative;
  color: ${({ theme }) => theme.color.fontColor};
`;

const PopupTextBox = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  margin-bottom: 45px;
`;

const Star = styled.span`
  font-size: 12rem;
  color: ${({ theme }) => theme.color.fontColor};
`;

const scroll = (movewidth: number) => keyframes`
  100% {
    transform: translate(-${movewidth}px);
    background-position: 200% center; // text-clip
  }
`;

const MarqueeText = styled.div<{ movewidth: number }>`
  width: 1000px;
  height: 100%;
  background: #c148ec;
  border-radius: 100px;
  padding: 10px calc(1rem + 2vw);
  overflow: hidden;
  position: relative;
  display: flex;
  margin-left: auto;

  p {
    margin-right: 50px;
    /* background: linear-gradient(90deg, rgba(29, 255, 142, 1) 0%, rgba(255, 242, 68, 1) 56%, rgba(255, 255, 255, 1) 89%); */
    background: #222;
    background-size: 200% auto;
    color: transparent;
    -moz-background-clip: text;
    -webkit-background-clip: text;
    animation: ${({ movewidth }) => scroll(movewidth)} ${({ movewidth }) => `${movewidth / 100}s`} linear 0s infinite;
  }

  @media screen and (max-width: 980px) {
    grid-column: 1 / span 8;
    border-radius: 15%;
  }
`;
