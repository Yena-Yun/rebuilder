import { useEffect, useRef, useState } from 'react';

interface IntersectionProps {
  rootMargin: string;
}

export const useFadeInObserver = ({ rootMargin }: IntersectionProps) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [isInViewport, setIsInViewport] = useState(false);

  useEffect(() => {
    if (!scrollRef.current) return;

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsInViewport(true);
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(callback, {
      root: null,
      rootMargin,
      threshold: 0,
    });

    observer.observe(scrollRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return { scrollRef, isInViewport };
};
