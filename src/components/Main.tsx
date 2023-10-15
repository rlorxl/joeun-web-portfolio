import React from "react";
import { styled } from "styled-components";

const Main = () => (
  <MainWrap>
    <div>
      <p>
        <Hello>Hello</Hello>
        <span className="blink-bar"></span>
        <span>I'm Joeun,</span>
      </p>
      <p>
        <span>Sensible</span>
      </p>
      <p>
        <span>Frontend Developer</span>
      </p>
    </div>
  </MainWrap>
);

export default Main;

const MainWrap = styled.div`
  height: calc(100vh - 100px);
  padding: 0 5rem;
  ${({ theme }) => theme.mixins.flexBox()};

  div {
    width: 1280px;
    max-width: 1440px;
    ${({ theme }) => theme.mixins.flexBox({ direction: "column", align: "flex-start" })};
  }

  p {
    font-size: ${({ theme }) => theme.fontSize["4xl"]};
    font-weight: 600;
    overflow: hidden;
    flex-shrink: 0;
    white-space: nowrap;
  }

  span {
    display: inline-block;
  }

  p:nth-child(1) {
    align-self: end;
  }

  p:nth-child(2) {
    padding: 0 3rem;
    background-color: #f04545;
    border-radius: 100px;
    color: #222;
    margin-bottom: 2.5rem;
  }

  p:nth-child(3) {
    max-width: 900px;
    padding: 0 3rem;
    background-color: #c148ec;
    border-radius: 100px;
    color: #222;
    align-self: end;
  }
`;

const Hello = styled.span`
  margin-right: 48px;
`;
