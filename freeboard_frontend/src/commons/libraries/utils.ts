import { useRef, useEffect, useCallback } from "react";

export const getDate = (myDate: string) => {
  const date = new Date(myDate);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

// intersection - observer
export const useScrollFadeIn = (direction: any, duration: any, delay: any) => {
  const element = useRef<HTMLDivElement>(null);

  const handleDirection = (name: any) => {
    switch (name) {
      case "up":
        return "translate3d(0, 50%, 0)";
      case "down":
        return "translate3d(0, -50%, 0)";
      case "left":
        return "translate3d(50%, 0, 0)";
      case "right":
        return "translate3d(-50%, 0, 0)";
      default:
    }
  };

  const onScroll = useCallback(
    ([entry]) => {
      const { current }: any = element;
      if (entry.isIntersecting) {
        current.style.transitionProperty = "all";
        current.style.transitionDuration = `${duration}s`;
        current.style.transitionTimingFunction = "cubic-bezier(0, 0, 0.2, 1)";
        current.style.transitionDelay = `${delay}s`;
        current.style.opacity = 1;
        current.style.transform = "translate3d(0, 0, 0)";
      }
    },
    [delay, duration]
  );

  useEffect(() => {
    let observer: any;

    if (element.current) {
      observer = new IntersectionObserver(onScroll, { threshold: 0.7 });
      observer.observe(element.current);
    }

    return () => observer && observer.disconnect();
  }, [onScroll]);

  return {
    ref: element,
    style: { opacity: 0, transform: handleDirection(direction) },
  };
};
