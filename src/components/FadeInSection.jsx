import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const FadeInSection = ({ children, delay = 0, y = 50 }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { autoAlpha: 0, y: y },
      {
        duration: 1,
        autoAlpha: 1,
        y: 0,
        delay: delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, [delay, y]);

  return <div ref={sectionRef}>{children}</div>;
};

export default FadeInSection;
