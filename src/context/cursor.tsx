import React, { createContext, useState } from "react";

const CursorContext = createContext<{
  isMouseMove: boolean;
  expand: boolean;
  mouseHandler: (val: boolean) => void;
  expandHandler: (val: boolean) => void;
}>({
  isMouseMove: false,
  expand: false,
  mouseHandler: () => {},
  expandHandler: () => {},
});

export const CursorProvider = ({ children }: { children: React.ReactNode }) => {
  const [isMouseMove, setIsMouseMove] = useState<boolean>(false);
  const [expand, setExpand] = useState<boolean>(false);

  const mouseHandler = (val: boolean) => {
    setIsMouseMove(val);
  };

  const expandHandler = (val: boolean) => {
    setExpand(val);
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
