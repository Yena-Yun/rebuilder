import { useEffect, useRef, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { WORD_LIST } from './constants';

export const Section2 = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [isInViewport, setIsInViewport] = useState(false);

  useEffect(() => {
    // 요소가 아직 준비되지 않은 경우 중단
    if (!scrollRef.current) return;

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // 요소가 뷰포트에 나타난 경우
          setIsInViewport(true);
          observer.unobserve(entry.target);
        }

        // else {
        //   // 요소가 뷰포트를 벗어난 경우
        //   setIsInViewport(false);
        // }
      });
    };

    const observer = new IntersectionObserver(callback, {
      root: null,
      rootMargin: '0px',
      threshold: 0,
    });

    // 요소 관찰 시작
    observer.observe(scrollRef.current);

    // 컴포넌트가 언마운트되면 관찰 중단
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Container>
      <InnerContainer>
        <FlexColumn>
          <FlexBetween>
            <div></div>
            <WordContainer
              ref={scrollRef}
              className={isInViewport ? 'frame-in' : ''}
            >
              {WORD_LIST.map(({ id, fullWord, capital, restWord }) => (
                <WordBox key={id} $fullWord={fullWord}>
                  <Word>
                    <span>{capital}</span>
                    {restWord}
                  </Word>
                </WordBox>
              ))}
            </WordContainer>
            <div></div>
          </FlexBetween>

          <SentenceContainer>
            <span>
              VRIN은 대체 불가능한 차세대 3D 비전 AI로 발전하고 있습니다.
            </span>
          </SentenceContainer>
        </FlexColumn>
      </InnerContainer>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 90vh;
  background: rgb(0, 0, 0);
  /* overflow: hidden; */
`;

const InnerContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 15%;
  transform: translate(-50%);
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const FlexBetween = styled.div`
  display: flex;
  justify-content: space-between;
`;

const easeinout = keyframes`
  0% {
      opacity: 0;
      transform: translate3d(0, 50px, 0);
    }

    100% {
      opacity: 1;
      transform: translateZ(0);
    }
`;

const WordContainer = styled.div`
  display: flex;
  flex-direction: column;

  &.frame-in {
    animation: ${easeinout} 2s forwards;
  }
`;

const WordBox = styled.div<{ $fullWord: string }>`
  opacity: 0;
  margin-bottom: 4.6px;

  ${({ $fullWord }) =>
    $fullWord === 'Valuable'
      ? css`
          animation: 1s ease-in-out 0.5s 1 normal forwards running ${easeinout};
        `
      : $fullWord === 'Rare'
      ? css`
          animation: 1s ease-in-out 1s 1 normal forwards running ${easeinout};
        `
      : $fullWord === 'Inimitable'
      ? css`
          animation: 1s ease-in-out 1.5s 1 normal forwards running ${easeinout};
        `
      : css`
          animation: 1s ease-in-out 2s 1 normal forwards running ${easeinout};
        `};
`;

const Word = styled.span`
  color: rgb(255, 255, 255);
  font-size: 5.06rem;
  font-weight: 500;
  line-height: 138%;
  text-align: center;

  & span {
    font-weight: 700;
    font-size: 6.34rem;
  }
`;

const SentenceContainer = styled.div`
  animation: 1s ease-in-out 2.5s 1 normal forwards running ${easeinout};
  opacity: 0;
  margin-top: 204px;
  text-align: center;

  & span {
    color: rgb(255, 255, 255);
    font-size: 3.6rem;
    font-weight: 500;
    line-height: 138%;
    text-align: center;
    white-space: pre-wrap;
  }
`;
