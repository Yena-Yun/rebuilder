import styled, { keyframes } from 'styled-components';

export const Section2 = () => {
  return (
    <Container>
      <InnerContainer>
        <FlexColumn>
          <FlexBetween>
            <div></div>
            <ParagraphContainer>
              <Paragraph1Box>
                <Paragraph1>
                  <span>V</span>aluable
                </Paragraph1>
              </Paragraph1Box>
              <Paragraph2Box>
                <Paragraph2>
                  <span>R</span>are
                </Paragraph2>
              </Paragraph2Box>
              <Paragraph3Box>
                <Paragraph3>
                  <span>I</span>nimitable
                </Paragraph3>
              </Paragraph3Box>
              <Paragraph4Box>
                <Paragraph4>
                  <span>N</span>on - substitutable
                </Paragraph4>
              </Paragraph4Box>
            </ParagraphContainer>
            <div></div>
          </FlexBetween>
          <Space></Space>
        </FlexColumn>
      </InnerContainer>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 90vh;
  background: rgb(0, 0, 0);
  overflow: hidden;
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

const easeinout = keyframes`
  0% {
      opacity: 0;
      transform: translate3d(0, 50px, 0);
    }

    100% {
      opacity: 1;
      transform: translateZ(0);
    }
`;

const Space = styled.div`
  animation: 1s ease-in-out 2s 1 normal forwards running ${easeinout};
  opacity: 0;
  margin-top: 204px;
  text-align: center;
`;

const ParagraphContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Paragraph1Box = styled.div`
  animation: 1s ease-in-out 0s 1 normal forwards running ${easeinout};
  opacity: 0;
  margin-bottom: 4.6px;
`;

const Paragraph2Box = styled.div`
  animation: 1s ease-in-out 0.5s 1 normal forwards running ${easeinout};
  opacity: 0;
  margin-bottom: 4.6px;
`;

const Paragraph3Box = styled.div`
  animation: 1s ease-in-out 1s 1 normal forwards running ${easeinout};
  opacity: 0;
  margin-bottom: 4.6px;
`;

const Paragraph4Box = styled.div`
  animation: 1s ease-in-out 1.5s 1 normal forwards running ${easeinout};
  opacity: 0;
  margin-bottom: 4.6px;
`;

const Paragraph1 = styled.span`
  color: rgb(255, 255, 255);
  font-size: 5.06rem;
  font-weight: 500;
  line-height: 138%;
  text-align: center;

  & span {
    font-weight: 700;
    font-size: 6.34rem;
  }
`;

const Paragraph2 = styled.span`
  color: rgb(255, 255, 255);
  font-size: 5.06rem;
  font-weight: 500;
  line-height: 138%;
  text-align: center;

  & span {
    font-weight: 700;
    font-size: 6.34rem;
  }
`;

const Paragraph3 = styled.span`
  color: rgb(255, 255, 255);
  font-size: 5.06rem;
  font-weight: 500;
  line-height: 138%;
  text-align: center;

  & span {
    font-weight: 700;
    font-size: 6.34rem;
  }
`;

const Paragraph4 = styled.span`
  color: rgb(255, 255, 255);
  font-size: 5.06rem;
  font-weight: 500;
  line-height: 138%;
  text-align: center;

  & span {
    font-weight: 700;
    font-size: 6.34rem;
  }
`;
