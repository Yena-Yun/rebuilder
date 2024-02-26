import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { useBackgroundObserver } from './hooks/useBackgroundObserver';
import { FlexColumn } from 'styles/flex';

interface ObserverUIProps {
  videoSource: string;
  content: {
    head: Object;
    body: Object;
  };
  order?: number;
  hasBackground?: boolean;
}

export const ObserverUIContainer = ({
  videoSource,
  content,
  order,
  hasBackground,
}: ObserverUIProps) => {
  const { containerRef, backgroundStatus } = useBackgroundObserver();
  const { t } = useTranslation();

  const VIDEO_SOURCE = `/videos/${videoSource}.mp4`;
  const BACKGROUND_SOURCE = '/images/overlay.png';

  return (
    <Container ref={containerRef}>
      <BackgroundVideo className={backgroundStatus}>
        {hasBackground && (
          <BackgroundOverlay src={BACKGROUND_SOURCE} alt='video-background' />
        )}
        <VideoContainer
          width='100%'
          height='100%'
          loop
          autoPlay
          playsInline
          muted
          src={VIDEO_SOURCE}
          className={hasBackground ? 'inner-video' : ''}
        />
      </BackgroundVideo>

      <TextContainer>
        <HeadingContainer>
          {Object.keys(content.head).map((_, id) => (
            <Heading key={id}>
              {t(`section${order}.head.line${id + 1}`)}
            </Heading>
          ))}
        </HeadingContainer>
        {Object.keys(content.body).map((_, id) => (
          <Paragraph key={id}>
            {t(`section${order}.body.line${id + 1}`)}
          </Paragraph>
        ))}
      </TextContainer>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 200vh;
  background-color: rgb(18, 20, 23);
`;

const BackgroundOverlay = styled.img`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  object-fit: cover;
`;

const BackgroundVideo = styled.div`
  position: relative;
  width: 100%;
  height: auto;

  &.beforeIntersect {
    position: absolute;
    top: 0;
    bottom: unset;
  }

  &.isIntersecting {
    position: fixed;
    top: 0;
    bottom: unset;
  }

  &.afterIntersect {
    position: absolute;
    top: unset;
    bottom: 0;
  }
`;

const VideoContainer = styled.video`
  min-height: 100vh;
  object-fit: cover;

  &.inner-video {
    position: absolute;
    top: 25vh;
    right: 10vw;
    height: auto;
    max-width: 952px;
    min-height: 75vh;
  }
`;

const TextContainer = styled(FlexColumn)`
  position: absolute;
  top: 60%;
  left: 5%;
  align-items: flex-start;

  width: auto;
  padding: 32px 50px;
  background-color: rgba(40, 45, 50, 0.3);
  border-radius: 10px;
  transform: translate(0px, -50%);
  backdrop-filter: blur(6px);
  z-index: 10;

  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const HeadingContainer = styled(FlexColumn)`
  margin-bottom: 40px;
`;

const Heading = styled.span`
  font-size: 4rem;
  font-weight: 600;
  line-height: 138%;
  color: rgb(255, 255, 255);
`;

const Paragraph = styled.span`
  font-size: 2.4rem;
  font-weight: 400;
  line-height: 138%;
  color: rgb(255, 255, 255);
  white-space: pre-wrap;
`;
