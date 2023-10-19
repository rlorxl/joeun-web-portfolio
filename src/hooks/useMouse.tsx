import { gsap } from "gsap";
import { useEffect } from "react";

const useMouse = () => {
  useEffect(() => {
    let mouseX = 100;
    let mouseY = 100;
    let smallMouseX = 100;
    let smallMouseY = 100;

    gsap.to(
      {},
      {
        duration: 0.016,
        repeat: -1,
        onRepeat: () => {
          gsap.set(".cursor", {
            css: {
              left: mouseX,
              top: mouseY,
            },
          });
          gsap.set(".cursor-s", {
            css: {
              left: smallMouseX,
              top: smallMouseY,
            },
          });
        },
      }
    );

    window.addEventListener("mousemove", (e: MouseEvent) => {
      smallMouseX = e.clientX;
      smallMouseY = e.clientY;
      setTimeout(() => {
        mouseX = e.clientX;
        mouseY = e.clientY;
      }, 250);
    });
  }, []);
};

export default useMouse;
