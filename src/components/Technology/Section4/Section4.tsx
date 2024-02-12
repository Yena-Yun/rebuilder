import styled from 'styled-components';
import { useScrollUIContainer } from '../hooks/useScrollUIContainer/ScrollUIContainer';

const VIDEO_SOURCE = '/videos/pc/tech_video2_pc.mp4';
const VIDEO_TYPE = 'video/mp4';

export const Section4 = () => {
  const { containerRef, backgroundStyle } = useScrollUIContainer();

  return (
    <Container ref={containerRef}>
      <BackgroundVideo className={backgroundStyle}>
        <VideoContainer loop playsInline autoPlay>
          <source src={VIDEO_SOURCE} type={VIDEO_TYPE}></source>
        </VideoContainer>
      </BackgroundVideo>

      <TextContainer>
        <FlexColumn>
          <Heading>금속성 물체 스캐닝을 위한</Heading>
          <Heading>반사광 추론 기술</Heading>
        </FlexColumn>
        <Paragraph>Inverse Rendering 기반의 주변광 추론 기술을 통해</Paragraph>
        <ParagraphDouble>
          이미지에서 반사광을 제거하고 정확한 텍스처 복원이 가능합니다.
        </ParagraphDouble>
        <Paragraph>
          주변광에 의한 반사는 물체의 원본 색상을 예측하기 어렵게 만들고,
        </Paragraph>
        <Paragraph>
          특히 반사가 심한 물체의 경우 스팟이 하얗게 뜨는 하이라이팅으로
        </Paragraph>
        <ParagraphDouble>
          인해 스캐닝 후 색상이 매우 어색해집니다.
        </ParagraphDouble>
        <Paragraph>
          리빌더AI에서는 물체 촬영 시 조명 정보를 함께 캡처하고, 특허
        </Paragraph>
        <Paragraph>
          기술을 통해 물체 표면의 반사광을 정확하게 예측하여 모델의
        </Paragraph>
        <Paragraph>하이라이팅을 제거할 수 있습니다.</Paragraph>
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
