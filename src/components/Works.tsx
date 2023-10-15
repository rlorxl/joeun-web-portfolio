import React from "react";
import { styled } from "styled-components";

const Works = () => (
  <WorksWrap>
    <h1>
      <span>frontend</span>
      <span>works</span>
    </h1>

    <ul>
      {Array(5)
        .fill("")
        .map((item, i) => (
          <li key={i}>
            <ImageBox>
              {/* <a href=""> */}
              <div>{/* <img src="" alt="" /> */}</div>
              <div>
                <span>Next.js</span>
                <span>Typescript</span>
                <span>Tailwind</span>
                <span>Recoil</span>
              </div>
              {/* </a> */}
            </ImageBox>
            <DescBox>
              <p>개인 블로그</p>
              <p>2023.09~</p>
              <button type="button">Portfolio</button>
            </DescBox>
          </li>
        ))}
    </ul>
  </WorksWrap>
);

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
  }

  span:nth-child(2) {
    align-self: flex-end;
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
`;

const ImageBox = styled.div`
  width: 800px;
  border: 2px solid ${({ theme }) => theme.color.borderColor};
  border-radius: 25px;

  div:nth-child(1) {
    width: 100%;
    height: 300px;
    overflow: hidden;
  }

  div:nth-child(2) {
    height: 155px;
    padding: 20px;

    span {
      width: 100px;
      height: 32px;
      display: inline-flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      padding: 10px 24px;
      border: 2px solid ${({ theme }) => theme.color.borderColor};
      border-radius: 50px;
      margin-right: 12px;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const DescBox = styled.div`
  font-size: ${({ theme }) => theme.fontSize.medium2};

  p:nth-child(1) {
    font-size: ${({ theme }) => theme.fontSize.large};
    font-weight: 700;
  }

  button {
    width: 138px;
    height: 48px;
    border: none;
    border-radius: 25px;
    background-color: #fff;
    margin-top: 28px;
    cursor: pointer;
    font-size: ${({ theme }) => theme.fontSize.base};
    font-weight: 700;
    color: #222;
  }
`;
