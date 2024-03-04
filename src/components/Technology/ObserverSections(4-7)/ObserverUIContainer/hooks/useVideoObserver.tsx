import { useEffect, useRef, useState } from 'react';

export const useVideoObserver = () => {
  const videoRef = useRef<HTMLDivElement | null>(null);
  const [isInViewport, setIsInViewport] = useState(false);

  useEffect(() => {
    if (!videoRef.current) return;

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsInViewport(true);
          observer.unobserve(entry.target);
        }
      });
    };

    const option = {
      root: null,
      rootMargin: '0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver(callback, option);

    observer.observe(videoRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return { videoRef, isInViewport };
};
