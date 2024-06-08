import { useEffect, useRef, useState } from "react";

const useMouse = () => {
  const [smallDevice, setSmalldevice] = useState<boolean>(false);

  const mouseDefault = useRef<HTMLDivElement>(null);
  const mouseBack = useRef<HTMLDivElement>(null);

  const mousemoveHandler = (e: MouseEvent) => {
    if (mouseDefault.current) {
      mouseDefault.current.style.left = `${e.clientX}px`;
      mouseDefault.current.style.top = `${e.clientY}px`;
    }

    setTimeout(() => {
      if (mouseBack.current) {
        mouseBack.current.style.left = `${e.clientX}px`;
        mouseBack.current.style.top = `${e.clientY}px`;
      }
    }, 150);
  };

  useEffect(() => {
    const isSmallDevice = window.matchMedia("(max-width: 768px)").matches; // * s화면크기 최대 768px
    const isTouch = navigator.maxTouchPoints === 1; // * 터치가 가능한 디바이스인가?
    if (isSmallDevice && isTouch) setSmalldevice(true);
  }, []);

  return {
    device: smallDevice,
    mouse: mouseDefault,
    mouseBehind: mouseBack,
    mousemoveHandler,
  };
};

export default useMouse;
