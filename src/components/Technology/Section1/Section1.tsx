import styled, { css } from 'styled-components';
import { useTranslation } from 'react-i18next';
import { easeInOut } from '../keyframeStyle';
import { useMedia } from 'utils/Query';
import { FlexColumnCenter } from 'styles/flex';
import { Keyframes } from 'styled-components/dist/types';

export const Section1 = () => {
  const { t } = useTranslation();

  const { isMobile, isTabletS } = useMedia();

  const VIDEO_SOURCE = () => {
    const media = isMobile ? 'mobile' : isTabletS ? 'tablet' : 'pc';
    return `/videos/${media}/tech_video1_${media}.mp4`;
  };

  return (
    <Container>
      <Video autoPlay muted playsInline src={VIDEO_SOURCE()} />

      <MainBackground></MainBackground>

      <TextContainer>
        <Line1 $easeInOut={easeInOut}>
          <span>{t('section1.line1')}</span>
        </Line1>
        <Line2 $easeInOut={easeInOut}>
          <span>{t('section1.line2')}</span>
        </Line2>
      </TextContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.black};
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding-top: 95px;
  object-fit: cover;

  @media ${({ theme }) => theme.media.tabletS} {
    padding-top: 65px;
  }
`;

const MainBackground = styled.div`
  position: absolute;
  top: 95px;
  width: 100%;
  height: calc(100vh - 95px);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.75) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  z-index: 150;
`;

const TextContainer = styled(FlexColumnCenter)`
  position: absolute;
  left: 50%;
  bottom: 140px;
  width: 100%;
  padding: 0 30px;
  transform: translate(-50%);
  overflow: hidden;
  z-index: 200;

  @media ${({ theme }) => theme.media.laptop} {
    bottom: 160px;
  }

  @media ${({ theme }) => theme.media.tabletS} {
    padding: 0 60px;
  }

  @media ${({ theme }) => theme.media.mobile} {
    bottom: 100px;
    padding: 0 20px;
  }
`;

const Line1 = styled.div<{ $easeInOut: Keyframes }>`
  margin-bottom: 40px;
  opacity: 0;
  ${({ $easeInOut }) =>
    css`
      animation: 1s ease-in-out 2.5s 1 normal forwards running ${$easeInOut};
    `};

  @media ${({ theme }) => theme.media.mobile} {
    margin-bottom: 20px;
    ${({ $easeInOut }) =>
      css`
        animation: 1s ease-in-out 3.5s 1 normal forwards running ${$easeInOut};
      `};
  }

  & span {
    display: block;
    color: ${({ theme }) => theme.color.white};
    font-size: 4rem;
    font-weight: 500;
    line-height: 138%;

    @media ${({ theme }) => theme.media.laptop} {
      font-size: 3.6rem;
    }

    @media ${({ theme }) => theme.media.tabletS} {
      font-size: 2.8rem;
    }

    @media ${({ theme }) => theme.media.mobile} {
      font-size: 1.6rem;
    }
  }
`;

const Line2 = styled.div<{ $easeInOut: Keyframes }>`
  opacity: 0;
  ${({ $easeInOut }) =>
    css`
      animation: 1s ease-in-out 3s 1 normal forwards running ${$easeInOut};
    `};

  @media ${({ theme }) => theme.media.mobile} {
    ${({ $easeInOut }) =>
      css`
        animation: 1s ease-in-out 4s 1 normal forwards running ${$easeInOut};
      `};
  }

  & span {
    display: block;
    color: ${({ theme }) => theme.color.white};
    font-size: 6rem;
    font-weight: 600;
    line-height: 138%;

    @media ${({ theme }) => theme.media.laptop} {
      font-size: 4rem;
    }

    @media ${({ theme }) => theme.media.tabletS} {
      font-size: 3.2rem;
    }

    @media ${({ theme }) => theme.media.mobile} {
      font-size: 2rem;
    }
  }
`;
