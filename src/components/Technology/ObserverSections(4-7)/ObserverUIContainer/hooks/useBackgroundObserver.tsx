import { useEffect, useRef, useState } from 'react';

export const useBackgroundObserver = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [backgroundStatus, setBackgroundStatus] = useState('beforeIntersect');

  useEffect(() => {
    if (!containerRef.current) return;

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(({ isIntersecting, boundingClientRect }) => {
        if (isIntersecting) {
          if (boundingClientRect.top < 0) {
            setBackgroundStatus('isIntersecting');
          }
        }

        if (!isIntersecting) {
          if (boundingClientRect.top > 0) {
            setBackgroundStatus('beforeIntersect');
          }

          if (boundingClientRect.top <= 0) {
            setBackgroundStatus('afterIntersect');
          }
        }
      });
    };

    const option = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(callback, option);

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return { containerRef, backgroundStatus };
};
