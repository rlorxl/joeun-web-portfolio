import React, { useContext, useEffect, useRef } from "react";
import { css, styled } from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Data from "../data/index.ts";
import CursorContext from "../context/cursor.tsx";

const Works = () => {
  const { mouseHandler } = useContext(CursorContext);
  const bgWord1 = useRef<HTMLSpanElement>(null);
  const bgWord2 = useRef<HTMLSpanElement>(null);
  const t1 = useRef<GSAPTimeline>();
  const t2 = useRef<GSAPTimeline>();

  const changeText = () => {
    if (!bgWord1.current || !bgWord2.current) return;
    bgWord1.current.textContent = "Responsible";
    bgWord2.current.textContent = "Web";
  };

  const resetText = (reset?: boolean) => {
    if (!bgWord1.current || !bgWord2.current || !reset) return;
    bgWord1.current.textContent = "Frontend";
    bgWord2.current.textContent = "Works";
  };

  const enter = () => {
    if (!t1.current || !t2.current) return;
    t1.current.play();
    t2.current.play();
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const scroll = ScrollTrigger.create({
      trigger: ".project1",
      start: "top center",
      end: "+=1800px",
      toggleActions: "restart none none none",
      onEnter: enter,
      onEnterBack: () => {
        resetText(true);
        t1.current?.restart(); // 기본값 ~ gsap.to에서 적용한 값이 재실행.
        t2.current?.restart();
      },
      onLeave: () => {
        changeText();
        t1.current?.restart();
        t2.current?.restart();
      },
    });

    /*
      - bg-word1은 translate(-50%), bg-word2는 translate(50%)가 기본값임.
      - 음수값은 xPercent를 적용했을 때 값을 overwrite하는 의미이지만 양수값은 기본값에서 시작해 몇%만큼 이동할건지를 보는거 같음. 
        때문에 xPercent: 0 일때 0만큼 이동하고, xPercent: -50을 해야 -50%만큼 다시 이동하면서 제자리로 오는것 같음. 
        (%값의 특성상 원래 이게 맞는 논리긴 함. 기본이 음수%일때 xPercent가 덮어써지는게 오히려 이상함.)
      - 그럼 그냥 x: 0은 왜 적용되나??
        - x: 100, y: 100은 적용하려는 값이 덮어써짐.
        - 글자가 올라오는 애니메이션 효과를 줄 때 기본값을 translate(0,100%)로 하고 y: 0을 주면 글자가 0만큼 올라오는게 아니라 포지션값이 바뀜. (포지션이 변하는 것처럼 보이지만 css는 translate가 변경됨.)
      - 그러니까.. x: 0을 적용하는게 이상한게 아니라 translate(-50%)에 xPercent: 0 (translate(0px))을 지정했을 때 위치가 제자리로 오는 이유가 궁금함. 
    */

    t1.current = gsap
      .timeline({
        paused: true,
        scrollTrigger: scroll,
      })
      .to(".bg-word1", {
        xPercent: 0,
        duration: 1.5,
        ease: "power3.Out",
      });

    t2.current = gsap
      .timeline({
        paused: true,
        scrollTrigger: scroll,
      })
      .to(".bg-word2", {
        x: 0,
        duration: 1.2,
        ease: "power3.Out",
      });
  }, []);

  const checkLink = (link: string) => {
    if (link === '/') {
      alert('현재 서버문제로 점검중입니다.😭')
    }
  }

  return (
    <WorksWrap>
      <HeadingWrap>
        <h2 id="works" className="works">
          Works.
        </h2>
        <p>썸네일을 클릭하면 웹사이트 링크로 연결됩니다.</p>
      </HeadingWrap>
      <h3>
        <span className="bg-word1" ref={bgWord1}>
          frontend
        </span>
        <span className="bg-word2" ref={bgWord2}>
          works
        </span>
      </h3>
      <ul>
        {Data.projects.map(({ id, name, date, src, stack, description, tags, link, portfolioLink, githubLink }, i) => (
          <li key={i} id={id} className={id}>
            <ImageBox imageid={id} onMouseEnter={() => mouseHandler(true)} onMouseLeave={() => mouseHandler(false)}>
              <a href={link === '/' ? undefined :link} onClick={() => checkLink(link)} target="_blank" rel="noreferrer">
                <div>
                  <img src={src.path} alt={src.alt} />
                </div>
                <div>
                  {stack.map((item, i) => (
                    <span key={i}>{item}</span>
                  ))}
                </div>
              </a>
            </ImageBox>
            <DescBox>
              <p>
                <span>{name}</span>
                <span>{date}</span>
              </p>
              <Tag>
                {tags.map((tag, i) => (
                  <span key={tag + i}>{tag}</span>
                ))}
              </Tag>
              <div>
                {description.map((desc, i) => (
                  <p key={desc + i}>{desc}</p>
                ))}
              </div>
              {portfolioLink && (
                <Button href={portfolioLink} target="_blank" rel="noreferrer">
                  Portfolio
                </Button>
              )}
              {githubLink && (
                <Button href={githubLink} target="_blank" rel="noreferrer">
                  Github
                </Button>
              )}
            </DescBox>
          </li>
        ))}
      </ul>
    </WorksWrap>
  );
};

export default Works;

const WorksWrap = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10%, auto));
  padding-bottom: 12rem;
  background: ${({ theme }) => theme.color.black};

  h3 {
    grid-area: 1/1/-1/-1;
    width: 100%;
    height: 100vh;
    font-size: calc(1.2rem + 10vw);
    ${({ theme }) => theme.mixins.flexBox({ align: "start", justify: "space-between" })}
    position: sticky;
    top: 0;
    overflow-x: hidden;
    text-shadow: -1px -1px 0 #2a18ff, 1px -1px 0 #2a18ff, -1px 1px 0 #2a18ff, 1px 1px 0 #2a18ff;

    span:nth-child(1) {
      transform: translate(-50%);
    }

    span:nth-child(2) {
      transform: translate(50%);
      align-self: flex-end;
    }
  }

  ul {
    grid-area: 1/2/-1/-2;
    margin: 0 auto;
    padding-top: 20rem;
    z-index: 10;
  }

  li {
    height: 456px;
    margin-bottom: 10vh;
    ${({ theme }) => theme.mixins.flexBox({ justify: "start" })};
    gap: 150px;
  }

  a {
    cursor: none;
  }

  @media screen and (max-width: 1600px) {
    padding-bottom: 0;

    ul {
      grid-area: 1/1/-1/-1;
      padding: 20rem 5rem 10rem;
    }

    li {
      gap: 100px;
    }
  }

  @media screen and (max-width: 1080px) {
    li {
      gap: 60px;
    }
  }

  @media screen and (max-width: 768px) {
    li {
      ${({ theme }) => theme.mixins.flexBox({ direction: "column", justify: "start", align: "flex-start" })};
      height: 800px;
      gap: 37px;
    }
  }

  @media screen and (max-width: 600px) {
    li {
      height: 568px;
    }

    li:nth-child(2) {
      margin-top: -147px;
    }
  }

  @media screen and (max-width: 425px) {
    ul {
      padding: 16rem 2rem 0;
    }
  }
`;

const HeadingWrap = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%);
  padding: 10rem 0;
  color: #c6c6c6;
  z-index: 100;
  text-align: center;

  h2 {
    color: ${({ theme }) => theme.color.white};
    margin-bottom: 10px;
  }
`;

const ImageBox = styled.div<{ imageid: string }>`
  max-width: 800px;
  border: 2px solid ${({ theme }) => theme.color.borderColor};
  border-radius: 25px;
  overflow: hidden;
  flex-basis: 435px;
  flex-grow: 1;

  div {
    overflow: hidden;
  }

  div:nth-child(1) {
    width: 100%;
    height: 100%;
    max-height: 300px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  div:nth-child(2) {
    min-height: 155px;
    padding: 20px;

    span {
      height: 32px;
      display: inline-flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      padding: 10px 24px;
      border: 2px solid ${({ theme }) => theme.color.borderColor};
      border-radius: 50px;
      margin-right: 12px;
      margin-bottom: 8px;
      white-space: nowrap;
    }
  }

  ${({ imageid }) =>
    imageid === "project3" &&
    css`
      img {
        transform: scale(1.5);
      }
    `}

  @media screen and (max-width: 1600px) {
    min-width: 485px;

    span {
      padding: 8px 18px;
      font-size: ${({ theme }) => theme.fontSize.small};
    }
  }

  @media screen and (max-width: 1080px) {
    min-width: 0;

    div:nth-child(2) span {
      padding: 1px 16px;
    }
  }

  @media screen and (max-width: 768px) {
    div:nth-child(1) {
      height: auto;
    }
  }

  @media screen and (max-width: 600px) {
    div:nth-child(1) {
      height: 100%;
    }
  }
`;

const DescBox = styled.div`
  flex: 1 250px;

  & > p {
    color: ${({ theme }) => theme.color.white};

    span:nth-child(1) {
      font-size: ${({ theme }) => theme.fontSize.large};
      color: ${({ theme }) => theme.fontSize.appColor};
      font-weight: 700;
    }

    span:nth-child(2) {
      font-size: ${({ theme }) => theme.fontSize.small};
      font-weight: 600;
      margin-left: 20px;
    }
  }

  & > div {
    font-size: ${({ theme }) => theme.fontSize.medium2};
    color: ${({ theme }) => theme.color.darkmodeColor};

    p {
      padding-left: 16px;
      margin-bottom: 6px;
      position: relative;

      &::before {
        content: "";
        display: inline-block;
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: ${({ theme }) => theme.color.appColor};
        opacity: 0.5;
      }
    }
  }

  @media screen and (max-width: 1080px) {
    flex: 1 0 300px;
    & > div {
      font-size: calc(0.8rem + 0.5vw);
    }
  }
`;

const Tag = styled.div`
  margin-bottom: 35px;

  span {
    font-size: ${({ theme }) => theme.fontSize.small};
    padding: 3px 12px;
    background: #383838;
    border-radius: 15px;
    margin-right: 8px;
    color: ${({ theme }) => theme.color.darkmodeColor};
  }
`;

const Button = styled.a`
  width: 175px;
  height: 64px;
  ${({ theme }) => theme.mixins.flexBox()};
  border-radius: 45px;
  background: ${({ theme }) => theme.color.appColor};
  margin-top: 30px;
  font-size: ${({ theme }) => theme.fontSize.medium2};
  font-weight: 700;
  color: ${({ theme }) => theme.color.white};
  text-transform: uppercase;

  @media screen and (max-width: 425px) {
    width: 150px;
    height: 42px;
    font-size: ${({ theme }) => theme.fontSize.base};
  }
`;
