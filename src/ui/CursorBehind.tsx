import { css, styled } from "styled-components";
import { forwardRef, useContext } from "react";
import CursorContext from "../context/cursor.tsx";

const CursorBehind = forwardRef(({ device }: { device: boolean }, ref) => {
  const ctx = useContext(CursorContext);

  const cursorRef = ref as React.LegacyRef<HTMLDivElement>;

  return <CursorStyle ref={cursorRef} className="cursor" enter={ctx.isMouseMove.toString()} device={device} />;
});

export default CursorBehind;

const CursorStyle = styled.div<{ enter: string; device: boolean }>`
  position: fixed;
  width: 40px;
  height: 40px;
  background: ${({ theme }) => theme.color.appColor};
  border-radius: 50%;
  margin-left: -20px;
  margin-top: -20px;
  opacity: 0.5;
  transition: scale 0.1s ease-out;
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
    device &&
    css`
      visibility: hidden;
    `}
`;
