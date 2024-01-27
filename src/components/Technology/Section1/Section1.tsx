import styled from 'styled-components';

export const Section1 = () => {
  return (
    <Container>
      <IntroVideo>
        <VideoContainer autoPlay muted playsInline>
          <source src='/videos/pc/tech_video1_pc.mp4' type='video/mp4' />
        </VideoContainer>
      </IntroVideo>

      <MainBackground></MainBackground>

      <ParagraphContainer>
        <ParagraphInnerContainer>
          <ParagraphLine1>
            <span>휴대폰 카메라 센서 기반의</span>
          </ParagraphLine1>
          <ParagraphLine2>
            <span>차세대 3D VISION AI, VRIN</span>
          </ParagraphLine2>
        </ParagraphInnerContainer>
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

const ParagraphInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ParagraphLine1 = styled.div`
  margin-bottom: 40px;
  opacity: 0;
  animation: 1s ease-in-out 2.5s 1 normal forwards running easeinout;

  & span {
    display: block;
    color: rgb(255, 255, 255);
    font-size: 4rem;
    font-weight: 500;
    line-height: 138%;
  }

  @keyframes easeinout {
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
  animation: 1s ease-in-out 3s 1 normal forwards running easeinout;

  & span {
    display: block;
    color: rgb(255, 255, 255);
    font-size: 6rem;
    font-weight: 600;
    line-height: 138%;
  }

  @keyframes easeinout {
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
