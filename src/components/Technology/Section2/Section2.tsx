import styled from 'styled-components';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import { WORD_LIST } from './constants';

export const Section2 = () => {
  const { scrollRef, isInViewport } = useIntersectionObserver({
    rootMargin: '0px',
  });

  return (
    <Container>
      <InnerContainer ref={scrollRef}>
        <FlexColumn>
          <FlexBetween>
            <div></div>
            <FlexColumn>
              {WORD_LIST.map(({ id, capital, restWord }) => (
                <WordBox
                  key={id}
                  className={isInViewport ? 'frame-in' : ''}
                  $delay={
                    id === 0
                      ? 0.5
                      : id === 1
                      ? 1
                      : id === 2
                      ? 1.5
                      : id === 3
                      ? 2
                      : 0
                  }
                >
                  <Word>
                    <span className='capital'>{capital}</span>
                    {restWord}
                  </Word>
                </WordBox>
              ))}
            </FlexColumn>
            <div></div>
          </FlexBetween>
        </FlexColumn>

        <Intro className={isInViewport ? 'frame-in' : ''}>
          <span>
            VRIN은 대체 불가능한 차세대 3D 비전 AI로 발전하고 있습니다.
          </span>
        </Intro>
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

const WordBox = styled.div<{ $delay: number }>`
  opacity: 0;
  margin-bottom: 4.6px;

  &.frame-in {
    animation: ${({ $delay }) =>
      `1s ease-in-out ${$delay}s 1 normal forwards running easeInOut`};

    @keyframes easeInOut {
      0% {
        opacity: 0;
        transform: translate3d(0, 50px, 0);
      }

      100% {
        opacity: 1;
        transform: translateZ(0);
      }
    }
  }
`;

const Word = styled.span`
  color: rgb(255, 255, 255);
  font-size: 5.06rem;
  font-weight: 500;
  line-height: 138%;
  text-align: center;

  & .capital {
    font-weight: 700;
    font-size: 6.34rem;
  }
`;

const Intro = styled.div`
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

  &.frame-in {
    animation: 1s ease-in-out 2.5s 1 normal forwards running easeInOut;

    @keyframes easeInOut {
      0% {
        opacity: 0;
        transform: translate3d(0, 50px, 0);
      }

      100% {
        opacity: 1;
        transform: translateZ(0);
      }
    }
  }
`;
