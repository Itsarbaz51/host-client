import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

export default function SmoothScroll({ children }) {
  useEffect(() => {
    const scrollContainer = document.querySelector("#smooth-scroll");

    const locomotiveScroll = new LocomotiveScroll({
      el: scrollContainer,
      smooth: true,
      smoothMobile: true,
    });

    return () => {
      locomotiveScroll.destroy();
    };
  }, []);

  return (
    <div id="smooth-scroll" data-scroll-container>
      {children}
    </div>
  );
}
