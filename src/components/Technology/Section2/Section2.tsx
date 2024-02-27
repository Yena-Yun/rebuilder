import styled, { css } from 'styled-components';
import { useTranslation } from 'react-i18next';
import { useFadeInObserver } from './hooks/useFadeInObserver';
import { easeInOut } from '../keyframeStyle';
import { WORD_LIST } from './constants';
import { FlexColumn, FlexBetween } from 'styles/flex';
import { Keyframes } from 'styled-components/dist/types';

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
            {/* 상위 justify-content: space-between으로 적절한 여백을 띄워주기 위한 div 선언 */}
            <div></div>
            <FlexColumn>
              {WORD_LIST.map(({ delay, capital, restWord }) => (
                <KeywordContainer
                  key={delay}
                  className={isInViewport ? 'frame-in' : ''}
                  $delay={delay}
                  $easeInOut={easeInOut}
                >
                  <Keyword>
                    <span className='capital'>{capital}</span>
                    {restWord}
                  </Keyword>
                </KeywordContainer>
              ))}
            </FlexColumn>
            <div></div>
          </FlexBetween>
        </FlexColumn>

        <OneLine
          className={isInViewport ? 'frame-in' : ''}
          $easeInOut={easeInOut}
        >
          <span>{t('section2.line1')}&nbsp;</span>
          <span>{t('section2.line2')}</span>
        </OneLine>
      </InnerContainer>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 90vh;
  background-color: ${({ theme }) => theme.color.black};

  @media ${({ theme }) => theme.media.laptop} {
    height: 80vh;
  }

  @media ${({ theme }) => theme.media.tabletS} {
    height: 75vh;
  }

  @media ${({ theme }) => theme.media.mobile} {
    height: 50vh;
  }
`;

const InnerContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 15%;
  width: 100%;
  transform: translate(-50%);

  @media ${({ theme }) => theme.media.mobile} {
    top: 0;
  }
`;

const KeywordContainer = styled.div<{ $delay: string; $easeInOut: Keyframes }>`
  opacity: 0;
  margin-bottom: 4.6px;

  @media ${({ theme }) => theme.media.laptop} {
    margin-bottom: 6px;
  }

  @media ${({ theme }) => theme.media.tabletS} {
    margin-bottom: 16px;
  }

  @media ${({ theme }) => theme.media.mobile} {
    margin-bottom: 10px;
  }

  &.frame-in {
    animation: ${({ $delay, $easeInOut }) =>
      css`1s ease-in-out ${$delay}s 1 normal forwards running ${$easeInOut}`};
  }
`;

const Keyword = styled.span`
  color: ${({ theme }) => theme.color.white};
  font-size: 5.06rem;
  font-weight: 500;
  line-height: 138%;
  text-align: center;

  @media ${({ theme }) => theme.media.laptop} {
    font-size: 3.8rem;
  }

  @media ${({ theme }) => theme.media.tabletS} {
    font-size: 2.8rem;
  }

  @media ${({ theme }) => theme.media.mobile} {
    font-size: 1.6rem;
  }

  & .capital {
    font-size: 6.34rem;
    font-weight: 700;

    @media ${({ theme }) => theme.media.laptop} {
      font-size: 4.6rem;
    }

    @media ${({ theme }) => theme.media.tabletS} {
      font-size: 3.6rem;
    }

    @media ${({ theme }) => theme.media.mobile} {
      font-size: 2rem;
    }
  }
`;

const OneLine = styled.div<{ $easeInOut: Keyframes }>`
  margin-top: 204px;
  opacity: 0;
  text-align: center;

  @media ${({ theme }) => theme.media.laptop} {
    margin-top: 180px;
  }

  @media ${({ theme }) => theme.media.tabletM} {
    width: 500px;
    margin: 150px auto 0;
    white-space: pre-wrap;
  }

  @media ${({ theme }) => theme.media.tabletS} {
    width: unset;
    white-space: unset;
    margin-top: 140px;
  }

  @media ${({ theme }) => theme.media.mobile} {
    margin-top: 70px;
    opacity: 1;
  }

  & span {
    color: ${({ theme }) => theme.color.white};
    font-size: 3.6rem;
    font-weight: 500;
    line-height: 138%;

    @media ${({ theme }) => theme.media.laptop} {
      font-size: 2.8rem;
    }

    @media ${({ theme }) => theme.media.tabletS} {
      display: block;
      font-size: 2.2rem;
    }

    @media ${({ theme }) => theme.media.mobile} {
      font-size: 1.6rem;
    }
  }

  &.frame-in {
    ${({ $easeInOut }) =>
      css`
        animation: 1s ease-in-out 2.5s 1 normal forwards running ${$easeInOut};
      `};
  }
`;
