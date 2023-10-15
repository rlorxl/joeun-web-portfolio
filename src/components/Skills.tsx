import React from "react";
import { styled } from "styled-components";
import data from "../data/index.ts";

const Skills = () => (
  <SkillsWrap>
    {data.skills.map((item, i) => (
      <span key={`skill${i}`}>{item}</span>
    ))}
  </SkillsWrap>
);

export default Skills;

const SkillsWrap = styled.div`
  display: inline-flex;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  white-space: nowrap;
  margin-bottom: 20rem;

  span {
    padding: 10px 24px;
    border-radius: 80px;
    border: 2px solid ${({ theme }) => theme.color.borderColor};
    font-size: ${({ theme }) => theme.fontSize.large};
    color: ${({ theme }) => theme.color.white};
  }
`;
