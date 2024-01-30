import styled from 'styled-components';
import { AnimationContainer } from './AnimationContainer';
import { WORD_LIST } from './constants';

export const Section2 = () => {
  return (
    <Container>
      <InnerContainer>
        <FlexColumn>
          <FlexBetween>
            <div></div>
            <FlexColumn>
              {WORD_LIST.map(({ id, capital, restWord }) => (
                <AnimationContainer
                  key={id}
                  delay={
                    id === 0
                      ? 0.5
                      : id === 1
                      ? 1
                      : id === 2
                      ? 1.5
                      : id === 3
                      ? 2
                      : 0
                  }
                >
                  <Word>
                    <span className='capital'>{capital}</span>
                    {restWord}
                  </Word>
                </AnimationContainer>
              ))}
            </FlexColumn>
            <div></div>
          </FlexBetween>
        </FlexColumn>

        <AnimationContainer delay={2.5}>
          <Intro>
            <span className='intro-sentence'>
              VRIN은 대체 불가능한 차세대 3D 비전 AI로 발전하고 있습니다.
            </span>
          </Intro>
        </AnimationContainer>
      </InnerContainer>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 90vh;
  background: rgb(0, 0, 0);
  /* overflow: hidden; */
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
  text-align: center;

  & .intro-sentence {
    color: rgb(255, 255, 255);
    font-size: 3.6rem;
    font-weight: 500;
    line-height: 138%;
    text-align: center;
    white-space: pre-wrap;
  }
`;
