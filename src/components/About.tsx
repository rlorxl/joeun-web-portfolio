import React, { useEffect } from "react";
import { styled } from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Vector from "../assets/Vector.svg";
import Experience from "./Experience.tsx";
import data from "../data/index.ts";

const About = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.defaults({
      toggleActions: "restart none none none",
      start: "top 70%",
    });

    // intro
    gsap.to(".about__heading", {
      scrollTrigger: {
        trigger: ".about",
      },
      y: 0,
      opacity: 1,
      duration: 1.5,
      ease: "elastic.out(1, 0.8)",
      stagger: 0.2,
    });

    gsap.to(".introduce", {
      scrollTrigger: {
        trigger: ".about",
      },
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.Out",
      stagger: 0.2,
    });

    // vector scrub
    gsap.to(".vector", {
      scrollTrigger: {
        trigger: ".about",
        scrub: 100,
        toggleActions: "restart none none none",
      },
      rotation: 360,
    });

    // skills up
    gsap.fromTo(
      ".skill",
      { y: 50, opacity: 0 },
      {
        scrollTrigger: {
          trigger: ".skills",
        },
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "elastic.out(1, 0.8)",
        stagger: { amount: 1.2 },
      }
    );
  }, []);

  return (
    <AboutWrap>
      <div>
        <Description>
          <h2 id="about" className="about">
            {"About.".split("").map((item, i) => (
              <span key={i} className="about__heading">
                {item}
              </span>
            ))}
          </h2>
          <Introduce>
            <p className="introduce">
              안녕하세요, 디자인 전공으로 실제 기능을 구현하는데 더 흥미를 느껴 <br /> 프론트엔드 개발자의 길에 뛰어든
              주니어 개발자 이조은 입니다.
            </p>
            <p className="introduce">
              퍼블리싱으로 시작해 웹사이트에 필요한 기본적인 기능들을 구현하는데 이르기까지 <br /> 더 높이 도약하기 위해
              이 분야에 점점 더 몰입하고 있어요.
              <br /> <em>javascript, react</em>를 이용한 <em>조화로운 ui/ux</em>와 웹 페이지를 구축하는데 관심이 많고,{" "}
              <br /> <em>재사용성, 가독성이 높은 컴포넌트 설계와 클린코드</em>를 지향하기 위해 공부하고 있습니다.
            </p>
            <p className="introduce">
              궁극적인 목표는 제가 가진 능력으로 새롭고 재밌는것들을 만들어내는 것, <br /> 그리고 소프트웨어를
              만드는것을 통해서 <em>사람들의 더 나은 삶에 기여하는 개발자</em>로 성장하는 것입니다.
              <br /> 앞으로 웹 개발 영역에 있어 꼭 필요한 사람이 될 수 있도록 끊임없이 노력하겠습니다.
            </p>
          </Introduce>
        </Description>
        <Skills className="skills">
          {data.skills.map((item, i) => (
            <div key={`skill${i}`}>
              {/* <OverWrap className="overwrap" /> */}
              <span className="skill">{item}</span>
            </div>
          ))}
        </Skills>
        <Experience />
        <RoundPath>
          <img src={Vector} alt="" className="vector" />
        </RoundPath>
      </div>
    </AboutWrap>
  );
};

export default About;

const AboutWrap = styled.section`
  margin: 0 auto;
  padding: 12rem 18rem;
  background: #fbffe5;
  overflow-x: hidden;
  position: relatvie;

  @media screen and (max-width: 1440px) {
    padding: 12rem 15rem;
  }

  @media screen and (max-width: 1280px) {
    padding: 12rem 4rem;
  }

  @media screen and (max-width: 768px) {
    padding: 6rem 4rem 0;
    margin: 0;
  }

  @media screen and (max-width: 425px) {
    padding: 6rem 2rem 0;
  }
`;

const Description = styled.div`
  ${({ theme }) => theme.mixins.flexBox({ align: "start", justify: "space-between" })};
  gap: 100px;
  margin-bottom: 10rem;

  h2 {
    overflow: hidden;
    flex-shrink: 0;

    span {
      display: inline-block;
      transform: translateY(100%);
      opacity: 0;
    }
  }

  @media screen and (max-width: 980px) {
    gap: 98px;

    h2 {
      width: 120px;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 8rem;
  }

  @media screen and (max-width: 425px) {
    gap: 35px;
  }
`;

const Introduce = styled.div`
  overflow: hidden;
  background: #222;
  padding: 2rem 3rem;
  border-radius: 28px;
  color: ${({ theme }) => theme.color.white};
  flex-basis: 880px;

  em {
    padding: 2px 5px;
    text-decoration: underline;
    font-weight: 500;
    color: ${({ theme }) => theme.color.appColor};
  }

  p {
    font-family: "Pretendard", sans-serif;
    font-size: 1.1rem;
    font-weight: 400;
    line-height: 30px; /* 211.111% */
    margin-bottom: 1.5rem;
    transform: translateY(100%);
    opacity: 0;

    &:nth-child(3) {
      margin-bottom: 0;
    }
  }

  @media screen and (max-width: 768px) {
    flex-basis: auto;
  }

  @media screen and (max-width: 425px) {
    p {
      font-size: ${({ theme }) => theme.fontSize.base};
      line-height: 32px;
      margin-bottom: 1.5rem;
    }
  }
`;

const Skills = styled.div`
  width: 70%;
  display: inline-flex;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  white-space: nowrap;
  margin-bottom: 10rem;

  & > div {
    font-size: ${({ theme }) => theme.fontSize.large};
    color: ${({ theme }) => theme.color.black};
    position: relative;
  }

  span {
    display: block;
    padding: 10px 24px;
    border-radius: 80px;
    border: 2px solid ${({ theme }) => theme.color.fontColor};
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 8rem;
  }
`;

const RoundPath = styled.div`
  width: 50%;
  position: absolute;
  top: 30%;
  right: -20%;

  img {
    width: 100%;
    height: 100%;
  }
`;
