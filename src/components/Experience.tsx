import React, { useEffect, useRef } from "react";
import { styled } from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import data from "../data/index.ts";

const Experience = () => {
  const experiences = useRef<HTMLUListElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.defaults({
      trigger: ".experience",
      start: "top 70%",
    });

    gsap.to(".experience__heading", {
      scrollTrigger: {
        toggleActions: "restart none none none",
      },
      y: 0,
      opacity: 1,
      duration: 1.2,
      ease: "elastic.out(1, 0.8)",
      stagger: 0.2,
    });

    experiences.current?.childNodes.forEach((_, i) => {
      const target = ".experience__item" + i;
      gsap.to(target, {
        scrollTrigger: {
          trigger: target,
          toggleActions: "play none none none",
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.Out",
      });
    });
  }, []);

  return (
    <ExperienceWrap className="experience">
      <h2>
        {"Experience.".split("").map((item, i) => (
          <span key={i} className="experience__heading">
            {item}
          </span>
        ))}
      </h2>
      <ul className="experience" ref={experiences}>
        {data.experiences.map(({ duration, title, descriptions, detail }, i) => (
          <li key={i} className={`experience__item${i}`}>
            <div>
              <Duration>{duration}</Duration>
              {detail && (
                <DetailWrap>
                  {detail.map((str, i) => (
                    <Detail key={i}>{str}</Detail>
                  ))}
                </DetailWrap>
              )}
            </div>
            <div>
              <Title>{title}</Title>
              <div>
                {descriptions.map((desc, i) => (
                  <p key={i}>{desc}</p>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </ExperienceWrap>
  );
};

export default Experience;

const ExperienceWrap = styled.div`
  margin-bottom: 6rem;

  h2 {
    overflow: hidden;
    margin-bottom: 40px;

    span {
      display: inline-block;
      transform: translateY(100%);
      opacity: 0;
    }
  }

  ul {
    margin-left: -150px;
  }

  li {
    ${({ theme }) => theme.mixins.flexBox({ align: "flex-start" })};
    gap: 130px;
    margin-bottom: 40px;
    font-size: calc(0.6rem + 0.5vw);
    transform: translateY(100%);
    opacity: 0;

    div:nth-child(2) {
      flex-basis: 380px;
    }

    @media screen and (max-width: 768px) {
      flex-direction: column;
      gap: 10px;

      div:nth-child(2) {
        flex-basis: 0;
      }
    }
  }

  @media screen and (max-width: 1600px) {
    ul {
      margin-left: 0;
    }
  }
`;

const Duration = styled.p`
  width: 185px;
`;

const DetailWrap = styled.div`
  margin-top: 12px;
`;

const Detail = styled.span`
  display: block;
  font-size: ${({ theme }) => theme.fontSize.small};
`;

const Title = styled.p`
  font-size: calc(0.8rem + 0.5vw);
  font-weight: 700;
  margin-bottom: 15px;
`;
