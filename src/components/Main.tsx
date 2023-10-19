/* eslint-disable object-shorthand */
import React, { useEffect, useRef } from "react";
import { styled, keyframes } from "styled-components";
// eslint-disable-next-line import/no-extraneous-dependencies
import { gsap } from "gsap";
import polygon1 from "../assets/polygon1.svg";

const Main = () => {
  const main = useRef<HTMLElement>(null);
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
      y: "90%",
    });
    t3.current
      .to(".p1", {
        y: 0,
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
          x: -220,
          y: "90%",
        },
        {
          visibility: "visible",
          y: 0,
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

  const marquee = () => {
    if (!p2.current) return;
    let rate = 100;
    let distance = p2.current.clientWidth;
    let style = window.getComputedStyle(p2.current);
    let marginRight = Number(style.marginRight) || 20;
    let totalDistance = distance + marginRight;
    let time = totalDistance / rate;

    if (!t2.current) return;
    t2.current.play();
    t2.current.to(".p2", {
      duration: time,
      repeat: -1,
      x: -totalDistance,
      ease: "none",
    });
  };

  const polygon = () => {
    gsap.to(".polygon1", {
      duration: 0.3,
      x: -400,
      y: -400,
      opacity: 1,
      rotate: -120,
      ease: "power2.Out",
    });
  };

  useEffect(() => {
    typeAni1();
    typeAni2();
    marquee();
    // polygon();
  }, []);

  return (
    <MainWrap ref={main}>
      <Polygon1 src={polygon1} alt="" className="polygon1" />
      <GridBox>
        <Greeting>
          <Inner>
            <En>
              {"Hello World✨.".split("").map((word, i) => (
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
          {"Sensible".split("").map((word, i) => (
            <span key={i} className="p1" style={{ transform: "translate(180px)" }}>
              {word}
            </span>
          ))}
          {"Steady".split("").map((word, i) => (
            <span key={i} className="p1-1">
              {word}
            </span>
          ))}
        </Paragragh1>
        <Paragragh2>
          <p className="p2" ref={p2}>
            Frontend Developer * Publisher&nbsp;
          </p>
          <p className="p2" ref={p2}>
            Frontend Developer * Publisher&nbsp;
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
  position: relative;

  p {
    white-space: nowrap;
  }

  span {
    white-space: nowrap;
  }
`;

const Polygon1 = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  rotate: 30%;
`;

const GridBox = styled.div`
  width: 1768px;
  max-width: 1800px;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(3, minmax(200px, auto));
  align-items: center;
  position: relative;
`;

const Greeting = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-around;
  align-items: center;
  grid-column: 3 / span 4;
  margin-left: 100px;
`;

const Inner = styled.span`
  position: relative;
  display: flex;
  align-items: center;
  color: #1dff8e;
`;

const En = styled.span`
  display: flex;

  span {
    display: none;
    width: fit-content;
    min-width: 40px;
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

const blink = keyframes`
  25% { opacity: 50%; }
  50% { opacity: 0}; /* 100% X */
`;

const Name = styled.span`
  display: inline-block;
  position: relative;

  &::before {
    content: "";
    display: inline-block;
    width: 25px;
    height: 80%;
    background: ${({ theme }) => theme.color.appColor};
    opacity: 0.8;
    position: absolute;
    top: 50%;
    left: -35px;
    transform: translateY(-50%);
    animation: ${blink} 1.2s step-end infinite;
  }
`;

const Paragragh1 = styled.div`
  grid-column: 2 / span 3;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.appColor};
  border-radius: 150px;
  color: #222;
  margin-left: 100px;
  overflow: hidden;
`;

const textclip = keyframes`
  100% { background-position: 200% center; }
`;

const Paragragh2 = styled.div<{ move?: number; forward?: boolean }>`
  grid-column: 4 / span 4;
  border-radius: 150px;
  overflow: hidden;
  position: relative;
  display: flex;

  p {
    margin-right: 20px;
    background: linear-gradient(90deg, rgba(29, 255, 142, 1) 0%, rgba(255, 242, 68, 1) 56%, rgba(255, 255, 255, 1) 89%);
    background-size: 200% auto;
    color: transparent;
    -moz-background-clip: text;
    -webkit-background-clip: text;
    animation: ${textclip} 5s linear infinite;
  }
`;
