import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { FlexColumnCenter } from '../../../styles/flex';

const VIDEO_SOURCE = '/videos/pc/tech_video1_pc.mp4';
const VIDEO_TYPE = 'video/mp4';

export const Section1 = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <IntroVideo>
        <VideoContainer autoPlay muted playsInline>
          <source src={VIDEO_SOURCE} type={VIDEO_TYPE} />
        </VideoContainer>
      </IntroVideo>

      <MainBackground></MainBackground>

      <ParagraphContainer>
        <FlexColumnCenter>
          <ParagraphLine1>
            <span>{t('section1.line1')}</span>
          </ParagraphLine1>
          <ParagraphLine2>
            <span>{t('section1.line2')}</span>
          </ParagraphLine2>
        </FlexColumnCenter>
      </ParagraphContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgb(0, 0, 0);
`;

const IntroVideo = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
  z-index: 100;
`;

const VideoContainer = styled.video`
  width: 100%;
  height: 100%;
  padding-top: 95px;
  object-fit: cover;

  @media (max-width: 768px) {
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

const ParagraphContainer = styled.div`
  position: absolute;
  left: 50%;
  bottom: 140px;
  width: 100%;
  padding: 0 30px;
  transform: translate(-50%);
  overflow: hidden;
  z-index: 200;
`;

const ParagraphLine1 = styled.div`
  margin-bottom: 40px;
  opacity: 0;
  animation: 1s ease-in-out 2.5s 1 normal forwards running easeInOut;

  & span {
    display: block;
    color: rgb(255, 255, 255);
    font-size: 4rem;
    font-weight: 500;
    line-height: 138%;

    @media (max-width: 1280px) {
      font-size: 3.6rem;
    }

    @media (max-width: 768px) {
      font-size: 2.8rem;
    }

    @media (max-width: 600px) {
      font-size: 1.6rem;
    }
  }

  @keyframes easeInOut {
    from {
      opacity: 0;
      transform: translate3d(0, 50px, 0);
    }
    to {
      opacity: 1;
      transform: translateZ(0);
    }
  }
`;

const ParagraphLine2 = styled.div`
  opacity: 0;
  animation: 1s ease-in-out 3s 1 normal forwards running easeInOut;

  & span {
    display: block;
    color: rgb(255, 255, 255);
    font-size: 6rem;
    font-weight: 600;
    line-height: 138%;

    @media (max-width: 1280px) {
      font-size: 4rem;
    }

    @media (max-width: 768px) {
      font-size: 3.2rem;
    }

    @media (max-width: 600px) {
      font-size: 2rem;
    }
  }

  @keyframes easeInOut {
    from {
      opacity: 0;
      transform: translate3d(0, 50px, 0);
    }
    to {
      opacity: 1;
      transform: translateZ(0);
    }
  }
`;
