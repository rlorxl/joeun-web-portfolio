import { gsap } from "gsap";
import React, { useEffect, useState } from "react";
import { css, keyframes, styled } from "styled-components";

const Navigation = () => {
  const [menuClicked, setMenuClicked] = useState<boolean>(false);

  useEffect(() => {
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
    <NavigationWrap clicked={menuClicked.toString()}>
      <ul>
        <li className="nav">
          <a href="#about">About</a>
        </li>
        <li className="nav">
          <a href="#works">Works</a>
        </li>
        <li className="nav">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <Menu onClick={() => setMenuClicked(!menuClicked)} clicked={menuClicked.toString()}>
        <span />
        <span />
        <span />
        <span />
      </Menu>
    </NavigationWrap>
  );
};

export default Navigation;

const NavigationWrap = styled.div<{ clicked: string }>`
  ${({ theme }) => theme.mixins.flexBox({ justify: "flex-end" })}
  width: 100%;
  height: 100px;
  padding: 2rem 3rem;
  color: ${({ theme }) => theme.color.fontColor};
  position: sticky;
  top: 0;
  z-index: 100;

  ul {
    ${({ theme }) => theme.mixins.flexBox({ justify: "space-between" })}
  }

  li {
    width: 100px;
    height: 50px;
    border-radius: 25px;
    border: 2px solid #f0f0f0;
    margin-right: 8px;
    opacity: 0;
    transform: translateY(-80%);
    transition: all 0.2s ease;
    background: #111;

    &:hover {
      border-color: ${({ theme }) => theme.color.appColor};
      background: ${({ theme }) => theme.color.appColor};

      a {
        color: ${({ theme }) => theme.color.black};
      }
    }
  }

  li:nth-child(3) {
    margin-right: 0;
  }

  a {
    width: 100%;
    height: 100%;
    ${({ theme }) => theme.mixins.flexBox()};
    color: ${({ theme }) => theme.color.white};
  }

  @media screen and (max-width: 768px) {
    align-items: flex-start;

    ul {
      display: none;
    }

    ${({ clicked }) =>
      clicked === "true" &&
      css`
        ul {
          display: block;
          position: absolute;
          top: 78%;
          right: 6%;
        }

        li {
          margin-right: 0;
          margin-bottom: 12px;
          opacity: 0;
          background: #111;

          &:nth-child(1) {
            animation: ${down} 0.5s cubic-bezier(0, 0.46, 0.32, 1.28) forwards;
          }
          &:nth-child(2) {
            animation: ${down1} 0.6s cubic-bezier(0, 0.46, 0.32, 1.28) 0.05s forwards;
          }
          &:nth-child(3) {
            animation: ${down2} 0.7s cubic-bezier(0, 0.46, 0.32, 1.28) 0.1s forwards;
          }
        }
      `};
  }

  @media screen and (max-width: 425px) {
    h1 {
      font-size: ${({ theme }) => theme.fontSize.medium2};
    }
  }
`;

const down = keyframes`
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const down1 = keyframes`
  0% {
    transform: translateY(-200%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const down2 = keyframes`
  0% {
    transform: translateY(-300%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const Menu = styled.div<{ clicked: string }>`
  width: 30px;
  height: 25px;
  position: relative;
  display: none;

  span {
    width: 100%;
    height: 3px;
    background: #fff;
    border-radius: 4px;
    transition: all 0.1s ease-in-out;
    position: absolute;
    left: 0;

    &:nth-child(1) {
      top: 0;
    }
    &:nth-child(2),
    &:nth-child(3) {
      top: 50%;
      transform: translateY(-50%);
    }
    &:nth-child(4) {
      bottom: 0;
    }
  }

  ${({ clicked }) =>
    clicked === "true" &&
    css`
      span:nth-child(1) {
        transform: translateY(8px);
        opacity: 0;
      }
      span:nth-child(2) {
        transform: rotate(45deg);
        transform-origin: center;
      }
      span:nth-child(3) {
        transform: rotate(-45deg);
        transform-origin: center;
      }
      span:nth-child(4) {
        transform: translateY(-8px);
        opacity: 0;
      }
    `}

  @media screen and (max-width: 768px) {
    display: block;
  }

  @media screen and (max-width: 425px) {
    width: 22px;
    height: 19px;
  }
`;
