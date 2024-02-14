import styled from 'styled-components';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver/useIntersectionObserver';

interface ObserverUIProps {
  videoSource: string;
  textGroup: {
    heading: string[];
    paragraph: string[];
  };
  hasBackground?: boolean;
}

export const ObserverUIContainer = ({
  videoSource,
  textGroup,
  hasBackground,
}: ObserverUIProps) => {
  const { containerRef, backgroundStyle } = useIntersectionObserver();

  const VIDEO_SOURCE = `/videos/${videoSource}.mp4`;

  const { heading, paragraph } = textGroup;

  return (
    <Container ref={containerRef}>
      <BackgroundVideo className={backgroundStyle}>
        {hasBackground && (
          <BackgroundOverlay src='/images/overlay.png' alt='video-background' />
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
        ></VideoContainer>
      </BackgroundVideo>

      <TextContainer>
        <FlexColumn>
          {heading.map((text) => (
            <Heading key={text}>{text}</Heading>
          ))}
        </FlexColumn>
        {paragraph.map((text) => (
          <Paragraph key={text}>{text}</Paragraph>
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

const TextContainer = styled.div`
  position: absolute;
  top: 60%;
  left: 5%;
  display: flex;
  flex-direction: column;
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

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
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
