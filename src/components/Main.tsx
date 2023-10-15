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

const MainWrap = styled.section`
  height: calc(100vh - 100px);
  padding: 0 8rem;
  ${({ theme }) => theme.mixins.flexBox()};

  div {
    width: 1768px;
    max-width: 1800px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(12%, auto));
    grid-template-rows: repeat(3, 1fr);
  }

  p {
    font-size: ${({ theme }) => theme.fontSize["4xl"]};
    font-weight: 600;
    overflow: hidden;
    white-space: nowrap;
    align-self: center;
  }

  span {
    display: inline-block;
  }

  p:nth-child(1) {
    grid-column: 3 / span 5;
  }

  p:nth-child(2) {
    grid-area: 2/2/3/5;
    padding: 0 3rem;
    background-color: #f04545;
    border-radius: 150px;
    color: #222;
    margin-bottom: 30px;
  }

  p:nth-child(3) {
    grid-area: 3/4/4/8;
    padding: 0 3rem;
    background-color: #c148ec;
    border-radius: 150px;
    color: #222;
  }
`;

const Hello = styled.span`
  margin-right: 48px;
`;
