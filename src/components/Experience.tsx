import React, { useEffect, useRef } from "react";
import { styled } from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import data from "../data/index.ts";

const Experience = () => {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.defaults({
    trigger: ".experience",
    toggleActions: "restart none none none",
    start: "top 70%",
  });
  const experiences = useRef<HTMLUListElement>(null);

  useEffect(() => {
    gsap.to(".experience__heading", {
      scrollTrigger: {},
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
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.Out",
      });
    });
  }, []);

  return (
    <ExperienceWrap>
      <h2 className="experience">
        {"Experience".split("").map((item, i) => (
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
  h2 {
    overflow: hidden;

    span {
      display: inline-block;
      transform: translateY(100%);
      opacity: 0;
    }
  }

  ul {
    margin-left: 172px;
  }

  li {
    display: flex;
    gap: 130px;
    margin-bottom: 40px;
    font-size: ${({ theme }) => theme.fontSize.medium2};
    transform: translateY(100%);
    opacity: 0;
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
  font-size: ${({ theme }) => theme.fontSize.medium1};
  font-weight: 700;
  margin-bottom: 15px;
`;
