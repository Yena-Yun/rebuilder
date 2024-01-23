import styled from 'styled-components';
import { IMAGE_TEXTS } from './constants';

export const Section3 = () => {
  return (
    <Container>
      <InnerContainer>
        <ImageContainer>
          {IMAGE_TEXTS.map((text, i) => (
            <ImageBox>
              <img
                src={`/images/large/horizontal-${i + 1}.png`}
                alt={`technology-${i + 1}`}
              />
              <span>{text}</span>
            </ImageBox>
          ))}
        </ImageContainer>
      </InnerContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  background: rgb(0, 0, 0);
`;

const InnerContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  padding: 200px 30px 300px;
`;

const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 101px 24px;
`;

const ImageBox = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  overflow: hidden;

  & img {
    width: 100%;
    height: auto;
    object-fit: cover;
    transition: transform 0.25s ease 0s;
    cursor: pointer;

    &:hover {
      transform: scale(1.1);
    }
  }

  & span {
    position: absolute;
    left: 36px;
    bottom: 36px;
    color: rgb(255, 255, 255);
    font-size: 2.4rem;
    font-weight: 500;
    line-height: 33px;
  }
`;
