import React, { createContext, useState } from "react";

const CursorContext = createContext<{
  isMouseMove: boolean;
  mouseHandler: () => void;
}>({
  isMouseMove: false,
  mouseHandler: () => {},
});

export const CursorProvider = ({ children }: { children: React.ReactNode }) => {
  const [isMouseMove, setIsMouseMove] = useState<boolean>(false);

  const mouseHandler = () => {
    setIsMouseMove(prev => !prev);
  };

  const value = {
    isMouseMove,
    mouseHandler,
  };

  return <CursorContext.Provider value={value}>{children}</CursorContext.Provider>;
};

export default CursorContext;
