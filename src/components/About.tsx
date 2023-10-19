import React from "react";
import { styled } from "styled-components";
import Experience from "./Experience.tsx";
import Vector from "../assets/Vector.svg";
import data from "../data/index.ts";

const About = () => (
  <AboutWrap>
    <div>
      <Description>
        <h2 id="about">About</h2>
        <Introduce>
          {/* <h3>저를 소개합니다</h3> */}
          <p>
            안녕하세요, 디자인 전공으로 실제 기능을 구현하는데 더 흥미를 느껴 <br /> 프론트엔드 개발자의 길에 뛰어든
            주니어 개발자 이조은 입니다. <br /> <br /> 퍼블리싱으로 시작해 웹사이트에 필요한 기본적인 기능들을
            구현하는데 이르기까지 <br /> 더 높이 도약하기 위해 이 분야에 점점 더 몰입하고 있어요.
            <br /> javascript, react를 이용한 조화로운 ui/ux와 웹 페이지를 구축하는데 관심이 많고, <br /> 재사용성,
            가독성이 높은 컴포넌트 설계와 클린코드를 지향하기 위해 공부하고 있습니다. <br />
            <br /> 궁극적인 목표는 제가 가진 능력으로 새롭고 재밌는것들을 만들어내는 것, <br /> 그리고 소프트웨어를
            만드는것을 통해서 사람들의 더 나은 삶에 기여하는 개발자로 성장하는 것입니다.
            <br /> 앞으로 웹 개발 영역에 있어 꼭 필요한 사람이 될 수 있도록 끊임없이 노력하겠습니다.
          </p>
        </Introduce>
      </Description>
      <Skills>
        {data.skills.map((item, i) => (
          <span key={`skill${i}`}>{item}</span>
        ))}
      </Skills>
      <Experience />
      <RoundPath>
        <img src={Vector} alt="" />
      </RoundPath>
    </div>
  </AboutWrap>
);

export default About;

const AboutWrap = styled.section`
  margin: 12rem auto;
  max-width: 1080px;
  position: relative;
`;

const Description = styled.div`
  ${({ theme }) => theme.mixins.flexBox({ align: "start", justify: "space-between" })};
  margin-bottom: 20rem;
`;

const Introduce = styled.div`
  max-width: 895px;

  h3 {
    font-size: ${({ theme }) => theme.fontSize.medium1};
    margin-bottom: 50px;
    font-weight: 400;
  }

  p {
    font-family: "Pretendard", sans-serif;
    font-size: ${({ theme }) => theme.fontSize.medium2};
    font-weight: 400;
    line-height: 38px; /* 211.111% */
  }
`;

const Skills = styled.div`
  display: inline-flex;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  white-space: nowrap;
  margin-bottom: 20rem;

  span {
    padding: 10px 24px;
    border-radius: 80px;
    border: 2px solid ${({ theme }) => theme.color.borderColor};
    font-size: ${({ theme }) => theme.fontSize.large};
    color: ${({ theme }) => theme.color.white};
  }
`;

const RoundPath = styled.div`
  width: 70%;
  position: absolute;
  top: 5%;
  left: -70%;

  img {
    width: 100%;
    height: 100%;
  }
`;
