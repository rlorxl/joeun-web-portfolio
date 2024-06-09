import React, { useContext, useEffect, useRef, useState } from "react";
import { keyframes, styled } from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CursorContext from "../context/cursor.tsx";

const element = [
  { id: "1", email: "imjoeun08@naver.com" },
  { id: "2", email: "imjoeun08@naver.com" },
  { id: "3", email: "imjoeun08@naver.com" },
];

const Contact = () => {
  const { expandHandler } = useContext(CursorContext);
  const [moveWidth, setMoveWidth] = useState<number>(0);

  const emailParent = useRef<HTMLParagraphElement>(null);
  const emailElement = useRef<HTMLSpanElement>(null);

  const t1 = useRef<GSAPTimeline>();
  t1.current = gsap.timeline({ paused: true });

  const changeBgColor = () => {
    gsap.to([".contact", ".article"], {
      background: "#2A18FF",
    });
    gsap.to([".contact", ".contact__heading", ".contact a"], {
      color: "#111",
    });
  };

  const resetBgColor = () => {
    gsap.to([".contact", ".article"], {
      background: "#111",
    });
    gsap.to([".contact", ".contact a"], {
      color: "#f0f0f0",
    });
    gsap.to(".contact__heading", {
      color: "#2A18FF",
    });
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".main", {
      scrollTrigger: {
        trigger: ".contact",
        start: "top 30%",
        toggleActions: "restart none none none",
        onEnter: () => {
          changeBgColor();
        },
        onLeaveBack: () => {
          resetBgColor();
        },
      },
    });

    const setElementWidth = () => {
      if (!emailElement.current) return;
      let translateWidth = emailElement.current.clientWidth;
      setMoveWidth(translateWidth);
    };

    setElementWidth();
    window.addEventListener("resize", setElementWidth);
  }, []);

  return (
    <ContactWrap className="contact">
      <h2 id="contact" className="contact__heading">
        Contact.
      </h2>
      <Email
        ref={emailParent}
        movewidth={moveWidth + 100}
        onMouseEnter={() => expandHandler(true)}
        onMouseLeave={() => expandHandler(false)}>
        {element.map(({ id, email }) => (
          <span className={`email email${id}`} key={id} ref={emailElement}>
            {email}
          </span>
        ))}
      </Email>
      <div>
        <p>imjoeun08@naver.com</p>
        <p>+82 5554 8026</p>
        <p>
          <a href="https://open.kakao.com/o/sgB2blPf">kakao open link</a>
        </p>
        <a href="https://github.com/rlorxl">
          <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M12.001 2c-5.525 0-10 4.475-10 10a9.994 9.994 0 0 0 6.837 9.488c.5.087.688-.213.688-.476c0-.237-.013-1.024-.013-1.862c-2.512.463-3.162-.612-3.362-1.175c-.113-.288-.6-1.175-1.025-1.413c-.35-.187-.85-.65-.013-.662c.788-.013 1.35.725 1.538 1.025c.9 1.512 2.337 1.087 2.912.825c.088-.65.35-1.087.638-1.337c-2.225-.25-4.55-1.113-4.55-4.938c0-1.088.387-1.987 1.025-2.688c-.1-.25-.45-1.275.1-2.65c0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337c1.913-1.3 2.75-1.024 2.75-1.024c.55 1.375.2 2.4.1 2.65c.637.7 1.025 1.587 1.025 2.687c0 3.838-2.337 4.688-4.563 4.938c.363.312.676.912.676 1.85c0 1.337-.013 2.412-.013 2.75c0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10Z"
            />
          </svg>
        </a>
      </div>
      <CopyRight>© 2023. Joeun Lee All rights reserved.</CopyRight>
    </ContactWrap>
  );
};

export default Contact;

const ContactWrap = styled.section`
  ${({ theme }) => theme.mixins.flexBox({ direction: "column" })}
  text-align: center;
  padding-top: 12rem;
  color: ${({ theme }) => theme.color.white};

  div > p {
    margin-top: 16px;
    font-size: 1.25rem;
  }

  svg {
    margin-top: 32px;
  }

  @media screen and (max-width: 1080px) {
    padding-top: 6rem;
  }
`;

const scroll = (movewidth: number) => keyframes`
  100% {
    transform: translate(-${movewidth}px);
  }
`;

const Email = styled.p<{ movewidth: number }>`
  width: 100vw;
  overflow: hidden;
  font-size: calc(2.5rem + 6vw);
  font-weight: 700;
  text-transform: uppercase;
  padding: 15rem 0 8rem 0;
  ${({ theme }) => theme.mixins.flexBox()};

  span {
    margin-right: 100px;
    animation: ${({ movewidth }) => scroll(movewidth)} ${({ movewidth }) => `${movewidth / 100}s`} linear 0s infinite;
  }
`;

const CopyRight = styled.p`
  font-size: ${({ theme }) => theme.fontSize.small};
  margin: 150px 0 30px 0;
  opacity: 0.5;
`;
