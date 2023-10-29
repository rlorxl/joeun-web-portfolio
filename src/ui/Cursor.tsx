import React, { useContext, useEffect, useState } from "react";
import { css, styled } from "styled-components";
import CursorContext from "../context/cursor.tsx";

const Cursor = () => {
  const [smallDevice, setSmalldevice] = useState<boolean>(false);
  const ctx = useContext(CursorContext);

  useEffect(() => {
    const isSmallDevice = window.matchMedia("(max-width: 768px)").matches; // * 화면크기 최대 768px
    const isTouch = navigator.maxTouchPoints === 1; // * 터치가 가능한 디바이스인가?
    if (isSmallDevice && isTouch) setSmalldevice(true);
  }, []);

  return (
    <>
      <CursorStyle className="cursor" enter={ctx.isMouseMove.toString()} device={smallDevice.toString()} />
      <SmallCursor className="cursor-s" enter={ctx.isMouseMove.toString()} device={smallDevice.toString()} />
    </>
  );
};

export default Cursor;

const CursorStyle = styled.div<{ enter: string; device: string }>`
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

  ${({ device }) =>
    device === "true" &&
    css`
      visibility: hidden;
    `}
`;

const SmallCursor = styled.div<{ enter: string; device: string }>`
  position: fixed;
  width: 12px;
  height: 12px;
  background: #fff;
  border-radius: 50%;
  margin-left: -6px;
  margin-top: -6px;
  z-index: 999;
  pointer-events: none;

  ${(props: { enter: string; device: string }) =>
    (props.enter === "true" || props.device === "true") &&
    css`
      visibility: hidden;
    `}
`;
