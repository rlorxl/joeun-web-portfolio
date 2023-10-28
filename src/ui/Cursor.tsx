import React, { useContext } from "react";
import { css, styled } from "styled-components";
import CursorContext from "../context/cursor.tsx";

const Cursor = () => {
  const ctx = useContext(CursorContext);
  return (
    <>
      <CursorStyle className="cursor" enter={ctx.isMouseMove.toString()} />
      <SmallCursor className="cursor-s" enter={ctx.isMouseMove.toString()} />
    </>
  );
};

export default Cursor;

const CursorStyle = styled.div<{ enter: string }>`
  position: fixed;
  width: 40px;
  height: 40px;
  background: ${({ theme }) => theme.color.appColor};
  border-radius: 50%;
  margin-left: -20px;
  margin-top: -20px;
  opacity: 0.5;
  transition: scale 0.2s ease-out;
  z-index: 999;
  pointer-events: none; // * 마우스 이벤트가 적용되지 않게 하는 속성
  mix-blend-mode: difference;

  ${({ enter }) =>
    enter === "true" &&
    css`
      scale: 3.5;
      background: #fff;
      opacity: 1;
      font-size: 4px;
      text-transform: uppercase;
      white-space: nowrap;

      &::after {
        content: "view site";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: ${({ theme }) => theme.color.black};
        color: transparent;
        -moz-background-clip: text;
        -webkit-background-clip: text;
      }
    `}
`;

const SmallCursor = styled.div<{ enter: string }>`
  position: fixed;
  width: 12px;
  height: 12px;
  background: #fff;
  border-radius: 50%;
  margin-left: -6px;
  margin-top: -6px;
  z-index: 999;
  pointer-events: none;

  ${({ enter }) =>
    enter === "true" &&
    css`
      visibility: hidden;
    `}
`;
