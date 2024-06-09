import React, { forwardRef, useContext } from "react";
import { css, styled } from "styled-components";
import CursorContext from "../context/cursor.tsx";

const Cursor = forwardRef(({ device }: { device: boolean }, ref) => {
  const ctx = useContext(CursorContext);

  const cursorRef = ref as React.LegacyRef<HTMLDivElement>;

  return <SmallCursor ref={cursorRef} className="cursor-s" enter={ctx.isMouseMove.toString()} device={device} />;
});

export default Cursor;

const SmallCursor = styled.div<{ enter: string; device: boolean }>`
  position: fixed;
  width: 12px;
  height: 12px;
  background: #fff;
  border-radius: 50%;
  margin-left: -6px;
  margin-top: -6px;
  z-index: 999;
  pointer-events: none;

  ${(props: { enter: string; device: boolean }) =>
    (props.enter === "true" || props.device) &&
    css`
      visibility: hidden;
    `}
`;
