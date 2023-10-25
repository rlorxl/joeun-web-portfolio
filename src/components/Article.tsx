import React, { useEffect } from "react";
import { styled } from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Arrow from "../assets/Arrow.svg";
import data from "../data/index.ts";

const Article = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.defaults({
      trigger: ".article",
      toggleActions: "restart none none none",
    });
    gsap.to(".article__heading", {
      scrollTrigger: {},
      y: 0,
      opacity: 1,
      duration: 1.2,
      ease: "elastic.out(1, 0.8)",
      stagger: 0.2,
    });
    gsap.to(".article__text", {
      scrollTrigger: {},
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.Out",
    });
    gsap.to(".article__item", {
      scrollTrigger: {
        toggleActions: "play none none none",
      },
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "elastic.out(1, 0.8)",
      stagger: 0.2,
    });
  }, []);
  return (
    <ArticleWrap className="article">
      <div>
        <h2>
          {"Article.".split("").map((item, i) => (
            <span key={i} className="article__heading">
              {item}
            </span>
          ))}
        </h2>
        <p className="article__text">
          프로젝트에서 배운 내용들을 정리해서 문서화하고 기술로그를 쓰는것을 즐깁니다. 이러한 과정을 통해 관련내용을
          숙지하고 내것으로 만드는데 많은 도움이 되고 있습니다.
        </p>
      </div>
      <ul>
        {data.articles.map(({ id, title, linkTo }) => (
          <li key={id}>
            <a href={linkTo} target="_blank" rel="noreferrer" className="article__item">
              <span>{title}</span>
              <img src={Arrow} alt="바로가기" />
            </a>
          </li>
        ))}
      </ul>
    </ArticleWrap>
  );
};

export default Article;

const ArticleWrap = styled.section`
  padding: 0 12rem;
  ${({ theme }) => theme.mixins.flexBox({ justify: "space-between", align: "flex-start" })};
  font-size: ${({ theme }) => theme.fontSize.medium2};
  gap: 200px;
  margin-bottom: 12rem;

  h2 {
    margin-bottom: 67px;
    overflow: hidden;

    span {
      display: inline-block;
      transform: translateY(100%);
      opacity: 0;
    }
  }

  div {
    order: 1;
    width: 500px;
    line-height: 40px;
  }

  p {
    transform: translateY(100%);
    opacity: 0;
  }

  ul {
    flex-basis: 834px;
  }

  li {
    height: 80px;
    font-size: ${({ theme }) => theme.fontSize.medium1};
    padding-top: 16px;
    overflow: hidden;

    &:hover {
      a {
        background: ${({ theme }) => theme.color.appColor};
        border-color: ${({ theme }) => theme.color.fontColor};
      }

      img {
        transform: translate(20px);
      }
      a {
        color: ${({ theme }) => theme.color.fontColor};
      }
    }
  }

  a {
    border: 2px solid ${({ theme }) => theme.color.borderColor};
    padding: 20px 45px;
    border-radius: 50px;
    ${({ theme }) => theme.mixins.flexBox({ justify: "space-between" })};
    white-space: nowrap;
    opacity: 0;
    transform: translateY(100%);
  }

  img {
    width: 22px;
    transition: transform 0.5s ease;
  }
`;