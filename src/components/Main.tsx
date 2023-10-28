/* eslint-disable object-shorthand */
import React, { useEffect, useRef, useState } from "react";
import { styled, keyframes } from "styled-components";
// eslint-disable-next-line import/no-extraneous-dependencies
import { gsap } from "gsap";

const Main = () => {
  const [moveWidth, setMoveWidth] = useState<number>(0);

  const p2 = useRef<HTMLParagraphElement>(null);
  const t1 = useRef<GSAPTimeline>();
  const t2 = useRef<GSAPTimeline>();
  const t3 = useRef<GSAPTimeline>();
  t1.current = gsap.timeline({ paused: true, repeat: -1 });
  t2.current = gsap.timeline({ paused: true });
  t3.current = gsap.timeline({ paused: true, repeat: -1 });

  const typeAni1 = () => {
    if (!t1.current) return;
    t1.current.play();
    t1.current
      .to(".en", {
        delay: 1.5,
        display: "block",
        duration: 0.4,
        stagger: { amount: 1.5 },
        yoyo: true,
        repeat: 1,
        repeatDelay: 0.5,
      })
      .to(".ko", {
        display: "block",
        delay: 1.5,
        duration: 0.4,
        stagger: { amount: 0.8 },
        yoyo: true,
        repeat: 1,
        repeatDelay: 0.5,
      });
  };

  const typeAni2 = () => {
    if (!t3.current) return;
    t3.current.play();
    t3.current.set(".p1", {
      visibility: "visible",
      yPercent: 90,
    });
    t3.current
      .to(".p1", {
        yPercent: 0,
        duration: 0.4,
        ease: "power3.Out",
        stagger: { amount: 0.8 },
      })
      .to(".p1", {
        visibility: "hidden",
        ease: "none",
        stagger: { amount: 0.8 },
      })
      .fromTo(
        ".p1-1",
        {
          yPercent: 50,
        },
        {
          visibility: "visible",
          yPercent: -100,
          duration: 0.4,
          ease: "power3.Out",
          stagger: { amount: 0.8 },
        }
      )
      .to(".p1-1", {
        visibility: "hidden",
        ease: "none",
        stagger: { amount: 0.8 },
      });
  };

  // const marquee = () => {
  //   if (!p2.current) return;
  //   let rate = 100;
  //   let distance = p2.current.clientWidth;
  //   let style = window.getComputedStyle(p2.current);
  //   let marginRight = Number(style.marginRight) || 20;
  //   let totalDistance = distance + marginRight;
  //   let time = totalDistance / rate;

  //   if (!t2.current) return;
  //   t2.current.play();
  //   t2.current.to(".p2", {
  //     duration: time,
  //     repeat: -1,
  //     x: -totalDistance,
  //     ease: "none",
  //   });
  // };

  useEffect(() => {
    typeAni1();
    typeAni2();

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
      <GridBox>
        <Greeting>
          <Inner>
            <En>
              {"Hello".split("").map((word, i) => {
                if (i === 4)
                  return (
                    <span key={i} className="en" style={{ marginRight: "30px" }}>
                      {word}
                    </span>
                  );
                return (
                  <span key={i} className="en">
                    {word}
                  </span>
                );
              })}
              {"World✨".split("").map((word, i) => (
                <span key={i} className="en">
                  {word}
                </span>
              ))}
            </En>
            <Ko>
              {["안", "녕", "하", "세", "요", "😀"].map((word, i) => (
                <span key={i} className="ko">
                  {word}
                </span>
              ))}
            </Ko>
          </Inner>
          <Name style={{ marginLeft: "60px" }}>I'm Joeun,</Name>
        </Greeting>
        <Paragragh1>
          <div>
            <p>
              {"Sensible".split("").map((word, i) => (
                <span key={i} className="p1">
                  {word}
                </span>
              ))}
            </p>
            <p>
              {"Steady".split("").map((word, i) => (
                <span key={i} className="p1-1">
                  {word}
                </span>
              ))}
            </p>
          </div>
        </Paragragh1>
        <Paragragh2 movewidth={moveWidth + 50}>
          <p className="p2" ref={p2}>
            Frontend Developer * Publisher
          </p>
          <p className="p2" ref={p2}>
            Frontend Developer * Publisher
          </p>
        </Paragragh2>
      </GridBox>
    </MainWrap>
  );
};

export default Main;

const MainWrap = styled.section`
  height: calc(100vh - 100px);
  padding: 0 8rem;
  ${({ theme }) => theme.mixins.flexBox()};
  font-family: "Montserrat", sans-serif;
  font-size: calc(1rem + 4.5vw);
  font-weight: 600;
  border-bottom: 2px solid #111;
  position: relative;

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

const GridBox = styled.div`
  width: 1768px;
  max-width: 1800px;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(3, minmax(200px, auto));
  align-items: center;
  position: relative;

  @media screen and (max-width: 425px) {
    grid-template-rows: repeat(3, minmax(110px, auto));
  }
`;

const Greeting = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-around;
  align-items: flex-end;
  grid-column: 3 / span 4;

  @media screen and (max-width: 980px) {
    flex-direction: column;
    align-items: flex-start;
    grid-column: 1 / span 3;

    span:nth-child(1) {
      min-height: 50%;
    }
    span:nth-child(2) {
      margin-left: 0 !important;
    }
  }
`;

const blink = keyframes`
  25% { opacity: 50%; }
  50% { opacity: 0}; /* 100% X */
`;

const Inner = styled.span`
  position: relative;
  display: flex;
  align-items: center;
  color: #1dff8e;

  &::after {
    content: "";
    display: inline-block;
    width: 25px;
    height: 80%;
    background: ${({ theme }) => theme.color.appColor};
    opacity: 0.8;
    position: absolute;
    top: 50%;
    right: -36px;
    transform: translateY(-50%);
    animation: ${blink} 1.2s step-end infinite;
  }
`;

const En = styled.span`
  display: flex;

  span {
    display: none;
  }
`;

const Ko = styled.span`
  display: flex;
  line-height: 2.2;
  font-size: calc(1rem + 2.5vw);

  span {
    display: none;
    width: fit-content;
  }
`;

const Name = styled.span`
  display: inline-block;
  position: relative;
`;

const Paragragh1 = styled.div`
  height: 50%;
  grid-column: 2 / span 3;

  div {
    height: 100%;
    padding: 0 calc(10rem + 2.5vw);
    background-color: ${({ theme }) => theme.color.appColor};
    border-radius: 150px;
    color: #222;
    margin-left: 100px;
    overflow: hidden;
  }

  p {
    display: flex;
    justify-content: center;
  }

  @media screen and (max-width: 980px) {
    grid-column: 1 / span 2;
    div {
      margin-left: 0;
      height: 80%;
      padding: 0 calc(8rem + 2.5vw);
    }
  }

  @media screen and (max-width: 425px) {
    height: 60%;

    div {
      padding: 0 calc(5rem + 2.5vw);
    }
  }
`;

const scroll = (movewidth: number) => keyframes`
  100% {
    transform: translate(-${movewidth}px);
    background-position: 200% center; // text-clip
  }
`;

const Paragragh2 = styled.div<{ movewidth: number }>`
  height: 100%;
  grid-column: 4 / span 4;
  border-radius: 25%;
  overflow: hidden;
  position: relative;
  display: flex;

  p {
    margin-right: 50px;
    background: linear-gradient(90deg, rgba(29, 255, 142, 1) 0%, rgba(255, 242, 68, 1) 56%, rgba(255, 255, 255, 1) 89%);
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
