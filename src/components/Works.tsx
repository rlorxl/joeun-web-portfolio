import React, { useContext, useEffect, useRef } from "react";
import { css, styled } from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Data from "../data/index.ts";
import CursorContext from "../context/cursor.tsx";

const Works = () => {
  const ctx = useContext(CursorContext);
  const bgWord1 = useRef<HTMLSpanElement>(null);
  const bgWord2 = useRef<HTMLSpanElement>(null);
  const t1 = useRef<GSAPTimeline>();
  const t2 = useRef<GSAPTimeline>();

  const changeText = () => {
    if (!bgWord1.current || !bgWord2.current) return;
    bgWord1.current.textContent = "Responsible";
    bgWord2.current.textContent = "Web";
  };

  const resetText = (reset?: boolean) => {
    if (!bgWord1.current || !bgWord2.current || !reset) return;
    bgWord1.current.textContent = "Frontend";
    bgWord2.current.textContent = "Works";
  };

  const enter = () => {
    if (!t1.current || !t2.current) return;
    t1.current.play();
    t2.current.play();
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const scroll = ScrollTrigger.create({
      trigger: ".project1",
      start: "top center",
      end: "+=1800px",
      onEnter: enter,
      onEnterBack: () => {
        resetText(true);
        t1.current?.restart();
        t2.current?.clear().fromTo(
          ".bg-word2",
          { xPercent: 50 }, // 이전 동작에 의해 현재 위치가 (xPercent: -100)이므로 위치를 재조정 해줌.
          {
            xPercent: -50,
            duration: 1.2,
            ease: "power3.Out",
          }
        );
      },
      onLeave: () => {
        changeText();
        t1.current?.restart();
        t2.current?.restart();
        t2.current?.to(".bg-word2", {
          xPercent: -100,
          duration: 1.2,
          ease: "power3.Out",
        });
      },
    });

    t1.current = gsap
      .timeline({
        paused: true,
        scrollTrigger: scroll,
      })
      .to(".bg-word1", {
        xPercent: 0,
        duration: 1.5,
        ease: "power3.Out",
      });

    t2.current = gsap
      .timeline({
        paused: true,
        scrollTrigger: scroll,
      })
      .to(".bg-word2", {
        xPercent: -50,
        duration: 1.2,
        ease: "power3.Out",
      });
  }, []);

  return (
    <WorksWrap>
      <h1 id="works" className="works">
        Works.
      </h1>
      <h2>
        <span className="bg-word1" ref={bgWord1}>
          frontend
        </span>
        <span className="bg-word2" ref={bgWord2}>
          works
        </span>
      </h2>
      <ul>
        {Data.projects.map(({ id, name, date, src, stack, description, link, portfolioLink, githubLink }, i) => (
          <li key={i} id={id} className={id}>
            <ImageBox imageid={id} onMouseEnter={() => ctx.mouseHandler()} onMouseLeave={() => ctx.mouseHandler()}>
              <a href={link} target="_blank" rel="noreferrer">
                <div>
                  <img src={src.path} alt={src.alt} />
                </div>
                <div>
                  {stack.map((item, i) => (
                    <span key={i}>{item}</span>
                  ))}
                </div>
              </a>
            </ImageBox>
            <DescBox>
              <p>
                <span>{name}</span>
                <span>{date}</span>
              </p>
              <div>
                {description.map((desc, i) => (
                  <p key={desc + i}>{desc}</p>
                ))}
              </div>
              {portfolioLink && (
                <Button href={portfolioLink} target="_blank" rel="noreferrer">
                  Portfolio
                </Button>
              )}
              {githubLink && (
                <Button href={githubLink} target="_blank" rel="noreferrer">
                  Github
                </Button>
              )}
            </DescBox>
          </li>
        ))}
      </ul>
    </WorksWrap>
  );
};

export default Works;

const WorksWrap = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10%, auto));
  margin-bottom: 12rem;

  h1 {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%);
    color: ${({ theme }) => theme.color.appColor};
  }

  h2 {
    grid-area: 1/1/-1/-1;
    width: 100%;
    height: 100vh;
    font-size: calc(1.2rem + 10vw);
    color: ${({ theme }) => theme.color.white};
    opacity: 10%;
    ${({ theme }) => theme.mixins.flexBox({ align: "start", justify: "space-between" })}
    position: sticky;
    top: 0;
    z-index: -1;

    span:nth-child(1) {
      transform: translate(-50%);
    }

    span:nth-child(2) {
      transform: translate(50%);
      align-self: flex-end;
    }
  }

  ul {
    grid-area: 1/2/-1/-2;
    padding-top: 10rem;
  }

  li {
    height: 456px;
    margin-bottom: 10vh;
    ${({ theme }) => theme.mixins.flexBox({ justify: "start" })};
    gap: 150px;
  }

  a {
    cursor: none;
  }

  @media screen and (max-width: 1600px) {
    ul {
      grid-area: 1/1/-1/-1;
      padding: 10rem 5rem;
    }

    li {
      gap: 100px;
    }
  }

  @media screen and (max-width: 1080px) {
    li {
      ${({ theme }) => theme.mixins.flexBox({ direction: "column", justify: "start", align: "flex-start" })};
      height: 800px;
      gap: 37px;
    }
  }
`;

const ImageBox = styled.div<{ imageid: string }>`
  max-width: 800px;
  border: 2px solid ${({ theme }) => theme.color.borderColor};
  border-radius: 25px;
  overflow: hidden;
  flex-basis: 435px;
  flex-grow: 1;

  div {
    overflow: hidden;
  }

  div:nth-child(1) {
    width: 100%;
    max-height: 300px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  div:nth-child(2) {
    min-height: 155px;
    padding: 20px;

    span {
      height: 32px;
      display: inline-flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      padding: 10px 24px;
      border: 2px solid ${({ theme }) => theme.color.borderColor};
      border-radius: 50px;
      margin-right: 12px;
      margin-bottom: 8px;
      white-space: nowrap;
    }
  }

  ${({ imageid }) =>
    imageid === "project3" &&
    css`
      img {
        transform: scale(1.5);
      }
    `}

  @media screen and (max-width: 1600px) {
    min-width: 485px;

    span {
      padding: 8px 18px;
      font-size: ${({ theme }) => theme.fontSize.small};
    }
  }

  @media screen and (max-width: 1080px) {
    flex-shrink: 0;
    flex-basis: auto;
  }
`;

const DescBox = styled.div`
  flex: 1 250px;

  & > p {
    margin-bottom: 30px;

    span:nth-child(1) {
      font-size: ${({ theme }) => theme.fontSize.large};
      color: ${({ theme }) => theme.fontSize.appColor};
      font-weight: 700;
    }

    span:nth-child(2) {
      font-size: ${({ theme }) => theme.fontSize.small};
      font-weight: 600;
      margin-left: 20px;
    }
  }

  & > div {
    font-size: ${({ theme }) => theme.fontSize.medium2};
    color: #dddddd;

    p {
      padding-left: 16px;
      margin-bottom: 6px;
      position: relative;

      &::before {
        content: "";
        display: inline-block;
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: ${({ theme }) => theme.color.appColor};
        opacity: 0.5;
      }
    }
  }
`;

const Button = styled.a`
  width: 175px;
  height: 64px;
  ${({ theme }) => theme.mixins.flexBox()};
  border-radius: 45px;
  background-color: #fff;
  margin-top: 30px;
  font-size: ${({ theme }) => theme.fontSize.medium2};
  font-weight: 700;
  color: #222;
  text-transform: uppercase;
`;
