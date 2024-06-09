import React, { createContext, useState } from "react";

const CursorContext = createContext<{
  isMouseMove: boolean;
  expand: boolean;
  mouseHandler: () => void;
  expandHandler: () => void;
}>({
  isMouseMove: false,
  expand: false,
  mouseHandler: () => {},
  expandHandler: () => {},
});

export const CursorProvider = ({ children }: { children: React.ReactNode }) => {
  const [isMouseMove, setIsMouseMove] = useState<boolean>(false);
  const [expand, setExpand] = useState<boolean>(false);

  const mouseHandler = () => {
    setIsMouseMove(prev => !prev);
  };

  const expandHandler = () => {
    setExpand(prev => !prev);
  };

  const value = {
    expand,
    isMouseMove,
    mouseHandler,
    expandHandler,
  };

  return <CursorContext.Provider value={value}>{children}</CursorContext.Provider>;
};

export default CursorContext;
