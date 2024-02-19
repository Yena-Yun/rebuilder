import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { useFadeInObserver } from './hooks/useFadeInObserver';
import { WORD_LIST } from './constants';

export const Section2 = () => {
  const { t } = useTranslation();
  const { scrollRef, isInViewport } = useFadeInObserver({
    rootMargin: '0px',
  });

  return (
    <Container>
      <InnerContainer ref={scrollRef}>
        <FlexColumn>
          <FlexBetween>
            <div></div>
            <FlexColumn>
              {WORD_LIST.map(({ delay, capital, restWord }) => (
                <WordBox
                  key={delay}
                  className={isInViewport ? 'frame-in' : ''}
                  $delay={delay}
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
            {t('section2.line1')}&nbsp;{t('section2.line2')}
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
`;

const InnerContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 15%;
  width: 100%;
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

const WordBox = styled.div<{ $delay: string }>`
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
  margin-top: 204px;
  opacity: 0;
  text-align: center;

  & span {
    color: rgb(255, 255, 255);
    font-size: 3.6rem;
    font-weight: 500;
    line-height: 138%;
    text-align: center;
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
