import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { useMedia } from 'hooks/useMedia';
import translation from 'locales/en/sentences.json';

const Section3 = () => {
  const { t } = useTranslation();

  const { isMobile, isTabletS } = useMedia();

  const IMAGE_SOURCE = (index: number, form: string) => {
    const size = isTabletS ? 'small' : 'large';
    const orientation = isMobile ? 'vertical' : 'horizontal';

    return `/images/${size}/${orientation}-${index + 1}.${form}`;
  };

  return (
    <Container>
      <InnerContainer>
        <ImageContainer>
          {Object.keys(translation.section3).map((text, i) => (
            <ImageBox key={text}>
              <picture>
                <source
                  srcSet={IMAGE_SOURCE(i, 'webp')}
                  type='image/webp'
                />
                <img
                  src={IMAGE_SOURCE(i, 'png')}
                  alt='main-technology'
                />
              </picture>
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
  background-color: ${({ theme }) => theme.color.black};
`;

const InnerContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 200px 30px 300px;

  @media ${({ theme }) => theme.media.desktop} {
    max-width: 1200px;
  }

  @media ${({ theme }) => theme.media.laptop} {
    padding: 100px 30px 250px;
  }

  @media ${({ theme }) => theme.media.tabletS} {
    padding: 0px 60px 200px;
  }

  @media ${({ theme }) => theme.media.mobile} {
    padding: 0px 20px 80px;
  }
`;

const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 101px 24px;

  @media ${({ theme }) => theme.media.laptop} {
    gap: 60.5px 18px;
  }

  @media ${({ theme }) => theme.media.tabletS} {
    gap: 20px 9px;
  }

  @media ${({ theme }) => theme.media.mobile} {
    gap: 16px 8px;
    white-space: pre-wrap;
  }
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
    color: ${({ theme }) => theme.color.white};
    font-size: 2.4rem;
    font-weight: 500;
    line-height: 33px;

    @media ${({ theme }) => theme.media.laptop} {
      left: 25px;
      bottom: 25px;
      font-size: 2.2rem;
      line-height: 26px;
    }

    @media ${({ theme }) => theme.media.tabletS} {
      left: 16px;
      bottom: 16px;
      font-size: 1.4rem;
      line-height: 17px;
    }
  }
`;

export default Section3;
