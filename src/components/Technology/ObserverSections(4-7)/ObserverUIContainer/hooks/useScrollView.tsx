import { useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';

export const useScrollView = () => {
  const [searchParams] = useSearchParams();
  const scrollIndex = searchParams.get('section');

  const scrollRefs = [
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
  ];

  useEffect(() => {
    // scrollIndex에서 4를 빼주는 이유: searchParams로 가져온 값(4부터 시작)을 scrollRefs 배열 인덱스(0부터 시작)와 맞춰주기 위해서
    if (scrollIndex)
      scrollRefs[Number(scrollIndex) - 4].current?.scrollIntoView();
  }, [scrollIndex]);

  return { scrollRefs };
};
