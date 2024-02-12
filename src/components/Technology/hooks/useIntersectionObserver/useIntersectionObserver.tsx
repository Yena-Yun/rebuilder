import { useEffect, useRef, useState } from 'react';

export const useIntersectionObserver = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [backgroundStyle, setBackgroundStyle] = useState('beforeIntersect');

  useEffect(() => {
    // 관찰할 요소가 아직 준비되지 않은 경우 중단
    if (!containerRef.current) return;

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(({ isIntersecting, boundingClientRect }) => {
        if (isIntersecting) {
          if (boundingClientRect.top < 0) {
            setBackgroundStyle('isIntersecting');
          }
        }

        if (!isIntersecting) {
          if (boundingClientRect.top > 0) {
            setBackgroundStyle('beforeIntersect');
          }

          if (boundingClientRect.top <= 0) {
            setBackgroundStyle('afterIntersect');
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

  return { containerRef, backgroundStyle };
};
