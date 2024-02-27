import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import translation from 'locales/en/sentences.json';

const IMAGE_SOURCE = (index: number) =>
  `/images/large/horizontal-${index + 1}.png`;
const IMAGE_ALT = (index: number) => `technology-${index + 1}`;

export const Section3 = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <InnerContainer>
        <ImageContainer>
          {Object.keys(translation.section3).map((text, i) => (
            <ImageBox key={text}>
              <img src={IMAGE_SOURCE(i)} alt={IMAGE_ALT(i)} />
              <span>{t(`section3.caption${i + 1}`)}</span>
            </ImageBox>
          ))}
        </ImageContainer>
      </InnerContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  background-color: rgb(0, 0, 0);
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
