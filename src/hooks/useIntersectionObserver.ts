import { useEffect, useRef, useState } from 'react';

interface IntersectionProps {
  rootMargin: string;
}

export const useIntersectionObserver = ({ rootMargin }: IntersectionProps) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [isInViewport, setIsInViewport] = useState(false);

  useEffect(() => {
    // 요소가 아직 준비되지 않은 경우 중단
    if (!scrollRef.current) return;

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        // 요소가 뷰포트에 나타난 경우
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

    // 요소 관찰 시작
    observer.observe(scrollRef.current);

    // 컴포넌트가 언마운트되면 관찰 중단
    return () => {
      observer.disconnect();
    };
  }, []);

  // ref와 뷰포트 안에 있는지 여부(isInViewport) 반환
  return { scrollRef, isInViewport };
};
