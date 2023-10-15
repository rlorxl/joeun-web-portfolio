import React from "react";
import { styled } from "styled-components";
import data from "../data/index.ts";

const Experience = () => (
  <ExperienceWrap>
    <h2>Experience</h2>
    <ul>
      {data.experiences.map(({ duration, title, descriptions, detail }) => (
        <li>
          <div>
            <Duration>{duration}</Duration>
            {detail && (
              <DetailWrap>
                {detail.map(str => (
                  <Detail>{str}</Detail>
                ))}
              </DetailWrap>
            )}
          </div>
          <div>
            <Title>{title}</Title>
            <div>
              {descriptions.map(desc => (
                <p>{desc}</p>
              ))}
            </div>
          </div>
        </li>
      ))}
    </ul>
  </ExperienceWrap>
);

export default Experience;

const ExperienceWrap = styled.div`
  ul {
    margin-left: 172px;
  }

  li {
    display: flex;
    gap: 130px;
    margin-bottom: 40px;
    font-size: ${({ theme }) => theme.fontSize.medium2};
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
