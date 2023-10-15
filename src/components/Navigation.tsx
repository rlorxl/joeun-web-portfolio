import React from "react";
import { styled } from "styled-components";

const Navigation = () => (
  <NavigationWrap>
    <h1>Joeun lee web portfolio</h1>
    <ul>
      <li>
        <a href="#">About</a>
      </li>
      <li>
        <a href="#">Works</a>
      </li>
      <li>
        <a href="#">Contact</a>
      </li>
    </ul>
  </NavigationWrap>
);

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

  h1 {
    font-size: ${({ theme }) => theme.fontSize.medium1};
    text-transform: uppercase;
    font-weight: 500;
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
  }

  li:nth-child(3) {
    margin-right: 0;
  }

  a {
    width: 100%;
    height: 100%;
    color: ${({ theme }) => theme.color.white};
    ${({ theme }) => theme.mixins.flexBox()}
  }
`;
