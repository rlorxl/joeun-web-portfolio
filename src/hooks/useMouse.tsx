import { gsap } from "gsap";
import { useEffect } from "react";

const useMouse = () => {
  const coordinate = {
    mouseX: 0,
    mouseY: 0,
    smallMouseX: 0,
    smallMouseY: 0,
  };

  const mousemoveHandler = (e: MouseEvent) => {
    coordinate.smallMouseX = e.clientX;
    coordinate.smallMouseY = e.clientY;
    setTimeout(() => {
      coordinate.mouseX = e.clientX;
      coordinate.mouseY = e.clientY;
    }, 250);
  };

  useEffect(() => {
    gsap.to(
      {},
      {
        duration: 0.1,
        repeat: -1,
        onRepeat: () => {
          gsap.set(".cursor", {
            css: {
              left: coordinate.mouseX,
              top: coordinate.mouseY,
            },
          });
          gsap.set(".cursor-s", {
            css: {
              left: coordinate.smallMouseX,
              top: coordinate.smallMouseY,
            },
          });
        },
      }
    );
  }, []);

  return [mousemoveHandler];
};

export default useMouse;
