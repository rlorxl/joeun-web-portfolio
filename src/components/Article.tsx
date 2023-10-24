import React from "react";
import { styled } from "styled-components";
import Arrow from "../assets/Arrow.svg";

const Article = () => (
  <ArticleWrap>
    <div>
      <h2>Articles.</h2>
      <p>
        프로젝트에서 배운 내용들을 정리해서 문서화하고 기술로그를 쓰는것을 즐깁니다. 이러한 과정을 통해 관련내용을
        숙지하고 내것으로 만드는데 많은 도움이 되고 있습니다.
      </p>
    </div>
    <ul>
      <li>
        <a href="/">
          <span>mdx태그 스타일링, 조건부 렌더링</span>
          <img src={Arrow} alt="" />
        </a>
      </li>
      <li>
        <a href="/">
          mdx태그 스타일링, 조건부 렌더링
          <img src={Arrow} alt="" />
        </a>
      </li>
      <li>
        <a href="/">
          mdx태그 스타일링, 조건부 렌더링
          <img src={Arrow} alt="" />
        </a>
      </li>
      <li>
        <a href="/">
          mdx태그 스타일링, 조건부 렌더링
          <img src={Arrow} alt="" />
        </a>
      </li>
    </ul>
  </ArticleWrap>
);

export default Article;

const ArticleWrap = styled.section`
  padding: 0 12rem;
  ${({ theme }) => theme.mixins.flexBox({ justify: "space-between", align: "flex-start" })};
  font-size: ${({ theme }) => theme.fontSize.medium2};
  gap: 200px;
  margin-bottom: 12rem;

  h2 {
    margin-bottom: 67px;
  }

  div {
    order: 1;
    width: 500px;
    line-height: 40px;
  }

  ul {
    flex-basis: 670px;
  }

  li {
    width: 100%;
    border: 2px solid ${({ theme }) => theme.color.borderColor};
    padding: 20px 45px;
    border-radius: 50px;
    font-size: ${({ theme }) => theme.fontSize.medium1};
    margin-bottom: 14px;

    &:hover {
      background: ${({ theme }) => theme.color.appColor};
      border-color: ${({ theme }) => theme.color.fontColor};

      img {
        transform: translate(20px);
      }
      a {
        color: ${({ theme }) => theme.color.fontColor};
      }
    }
  }

  a {
    ${({ theme }) => theme.mixins.flexBox({ justify: "space-between" })};
    white-space: nowrap;
  }

  img {
    width: 22px;
    transition: transform 0.5s ease;
  }
`;
