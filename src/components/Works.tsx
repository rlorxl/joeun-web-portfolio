import React, { useContext, useEffect, useState } from "react";
import { styled } from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Data from "../data/index.ts";
import CursorContext from "../context/cursor.tsx";

const Works = () => {
  const ctx = useContext(CursorContext);

  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.defaults({
    trigger: ".works",
    toggleActions: "restart none none none",
  });

  useEffect(() => {
    gsap.fromTo(
      ".bg-word1",
      {
        xPercent: -50,
      },
      {
        scrollTrigger: {},
        xPercent: 0,
        duration: 1.5,
        ease: "power3.Out",
      }
    );
    gsap.fromTo(
      ".bg-word2",
      {
        xPercent: 50,
      },
      {
        scrollTrigger: {},
        xPercent: 0,
        duration: 1.2,
        ease: "power3.Out",
      }
    );
  }, []);

  return (
    <WorksWrap>
      <h1 id="works" className="works">
        <span className="bg-word1">frontend</span>
        <span className="bg-word2">works</span>
      </h1>
      <ul>
        {Data.projects.map(({ id, name, date, src, stack, description, link, portfolioLink }, i) => (
          <li key={i} id={id}>
            <ImageBox onMouseEnter={() => ctx.mouseHandler()} onMouseLeave={() => ctx.mouseHandler()}>
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
              <p>{name}</p>
              <p>{date}</p>
              <div>
                {description.map((desc, i) => (
                  <p key={desc + i}>{desc}</p>
                ))}
              </div>
              {portfolioLink !== "" && (
                <Button href={portfolioLink} target="_blank" rel="noreferrer">
                  Portfolio
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
    grid-area: 1/1/-1/-1;
    width: 100%;
    height: 100vh;
    font-size: calc(1.2rem + 10vw);
    opacity: 10%;
    ${({ theme }) => theme.mixins.flexBox({ align: "start", justify: "space-between" })}
    position: sticky;
    top: 0;
    z-index: -1;

    span:nth-child(2) {
      align-self: flex-end;
    }
  }

  ul {
    padding: 0 12rem;
    grid-area: 1/1/-1/-1;
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
`;

const ImageBox = styled.div`
  width: 800px;
  border: 2px solid ${({ theme }) => theme.color.borderColor};
  border-radius: 25px;
  overflow: hidden;

  div:nth-child(1) {
    width: 100%;
    height: 300px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  div:nth-child(2) {
    height: 155px;
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
`;

const DescBox = styled.div`
  & > p:nth-child(1) {
    font-size: ${({ theme }) => theme.fontSize.large};
    color: ${({ theme }) => theme.fontSize.appColor};
    font-weight: 700;
  }

  & > p:nth-child(2) {
    font-size: ${({ theme }) => theme.fontSize.small};
    font-weight: 600;
    margin-bottom: 20px;
  }

  & > div {
    width: 600px;
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
  width: 158px;
  height: 52px;
  ${({ theme }) => theme.mixins.flexBox()};
  border-radius: 25px;
  background-color: #fff;
  margin-top: 28px;
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: 700;
  color: #222;
  text-transform: uppercase;
`;
