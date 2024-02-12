import styled from 'styled-components';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver/useIntersectionObserver';

interface ObserverUIProps {
  videoSource: string;
  textGroup: {
    heading: string[];
    paragraph: string[];
  };
}

export const ObserverUIContainer = ({
  videoSource,
  textGroup,
}: ObserverUIProps) => {
  const { containerRef, backgroundStyle } = useIntersectionObserver();

  const VIDEO_SOURCE = `/videos/${videoSource}.mp4`;
  const VIDEO_TYPE = 'video/mp4';

  const { heading, paragraph } = textGroup;

  return (
    <Container ref={containerRef}>
      <BackgroundVideo className={backgroundStyle}>
        <VideoContainer loop playsInline autoPlay>
          <source src={VIDEO_SOURCE} type={VIDEO_TYPE}></source>
        </VideoContainer>
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
  width: 100%;
  min-height: 100vh;
  object-fit: cover;
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

const ParagraphDouble = styled.span`
  font-size: 2.4rem;
  font-weight: 400;
  line-height: 138%;
  color: rgb(255, 255, 255);
  white-space: pre-wrap;
`;
