import { gsap } from "gsap";
import React, { useEffect } from "react";
import { styled } from "styled-components";

const Navigation = () => {
  useEffect(() => {
    gsap.to(".heading", {
      delay: 0.5,
      duration: 0.5,
      y: 0,
      opacity: 1,
      ease: "power3,Out",
    });
    gsap.to(".nav", {
      delay: 0.7,
      duration: 0.5,
      y: 0,
      opacity: 1,
      ease: "power3,Out",
      stagger: { amount: 0.2 },
    });
  }, []);

  return (
    <NavigationWrap>
      <h1 className="heading">Joeun lee web portfolio</h1>
      <ul>
        <li className="nav">
          <a href="#about">About</a>
        </li>
        <li className="nav">
          <a href="#works">Works</a>
        </li>
        <li className="nav">
          <a href="#contact">About</a>
        </li>
      </ul>
    </NavigationWrap>
  );
};

export default Navigation;

const NavigationWrap = styled.div`
  ${({ theme }) => theme.mixins.flexBox({ justify: "space-between" })}
  width: 100%;
  height: 100px;
  padding: 2rem 3rem;
  color: #fff;
  position: sticky;
  top: 0;
  z-index: 100;
  background: linear-gradient(180deg, rgba(36, 36, 36, 1) 0%, rgba(36, 36, 36, 1) 30%, rgba(255, 255, 255, 0) 100%);

  h1 {
    font-size: ${({ theme }) => theme.fontSize.medium1};
    text-transform: uppercase;
    font-weight: 500;
    opacity: 0;
    transform: translateY(-80%);
  }

  ul {
    ${({ theme }) => theme.mixins.flexBox({ justify: "space-between" })}
  }

  li {
    width: 100px;
    height: 50px;
    border-radius: 25px;
    border: 1px solid ${({ theme }) => theme.color.white};
    margin-right: 8px;
    opacity: 0;
    transform: translateY(-80%);
  }

  li:nth-child(3) {
    margin-right: 0;
  }

  a {
    width: 100%;
    height: 100%;
    color: ${({ theme }) => theme.color.white};
    ${({ theme }) => theme.mixins.flexBox()};
  }
`;
