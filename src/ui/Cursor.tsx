import React from "react";
import { styled } from "styled-components";

const Cursor = () => (
  <>
    <CursorStyle className="cursor" />
    <SmallCursor className="cursor-s" />
  </>
);

export default Cursor;

const CursorStyle = styled.div`
  position: fixed;
  width: 40px;
  height: 40px;
  background: ${({ theme }) => theme.color.appColor};
  border-radius: 50%;
  margin-left: -20px;
  margin-top: -20px;
  opacity: 0.5;
`;

const SmallCursor = styled.div`
  position: fixed;
  width: 12px;
  height: 12px;
  background: #fff;
  border-radius: 50%;
  margin-left: -6px;
  margin-top: -6px;
`;
