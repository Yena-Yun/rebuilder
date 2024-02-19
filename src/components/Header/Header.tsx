import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { LogoImage, LanguageImage } from './images/HeaderIcons';
import i18n from 'i18next';

export const Header = () => {
  const [hoveredNavId, setHoveredNavId] = useState('');
  const [isHoverTechnology, setIsHoverTechnology] = useState(false);
  const [isHoverLanguage, setIsHoverLanguage] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('KOR');

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <>
      <Container>
        <InnerContainer id='header' $isHoverTechnology={isHoverTechnology}>
          <UpperContainer>
            <Link
              to='https://rebuilderai.com'
              target='_blank'
              aria-label='Go Back to HomePage'
            >
              <img src={LogoImage} alt='RebuilderAI-logo' />
            </Link>

            <Navigation>
              {['Service', 'Technology', 'About', 'Contact'].map((nav) => {
                return nav === 'Technology' ? (
                  <NavTab
                    key={nav}
                    $borderLine={hoveredNavId === nav}
                    onMouseOver={() => {
                      setHoveredNavId(nav);
                      setIsHoverTechnology(true);
                    }}
                    onMouseLeave={() => setHoveredNavId('')}
                  >
                    {nav}
                  </NavTab>
                ) : (
                  <NavTab
                    key={nav}
                    $borderLine={hoveredNavId === nav}
                    onMouseOver={() => {
                      setHoveredNavId(nav);
                      setIsHoverTechnology(false);
                    }}
                    onMouseLeave={() => setHoveredNavId('')}
                  >
                    {nav}
                  </NavTab>
                );
              })}
            </Navigation>

            <div></div>

            <LanguageSelector
              onMouseOver={() => setIsHoverLanguage(true)}
              onMouseLeave={() => setIsHoverLanguage(false)}
            >
              <LanguageImage />
              {isHoverLanguage && (
                <ModalTopMargin $isHoverLanguage={isHoverLanguage}>
                  <LanguageModal>
                    {['KOR', 'ENG'].map((language) => (
                      <LanguageListItem
                        key={language}
                        onClick={() => {
                          changeLanguage(language === 'KOR' ? 'ko' : 'en');
                          setSelectedLanguage(language);
                        }}
                        $isSelectedLanguage={selectedLanguage === language}
                      >
                        {language}
                      </LanguageListItem>
                    ))}
                  </LanguageModal>
                </ModalTopMargin>
              )}
            </LanguageSelector>
          </UpperContainer>

          <DropdownContainer
            $isHoverTechnology={isHoverTechnology}
            $hoveredNavId={hoveredNavId}
            onMouseLeave={() => setIsHoverTechnology(false)}
          >
            {['광원추론', '재질추론', '실측크기', '3D 공간 영상'].map(
              (subNav) => (
                <Dropdown
                  key={subNav}
                  $borderLine={hoveredNavId === subNav}
                  onMouseOver={() => {
                    setHoveredNavId(subNav);
                    setIsHoverTechnology(true);
                  }}
                  onMouseLeave={() => setHoveredNavId('')}
                >
                  {subNav}
                </Dropdown>
              )
            )}
          </DropdownContainer>
        </InnerContainer>
      </Container>
    </>
  );
};

const Container = styled.div`
  position: fixed;
  width: 100%;
  border-bottom: 1px solid rgb(0, 0, 0);
  background-color: rgb(0, 0, 0);
  z-index: 500;
`;

const InnerContainer = styled.div<{ $isHoverTechnology: boolean }>`
  width: 1200px;
  height: ${({ $isHoverTechnology }) =>
    $isHoverTechnology ? '181px' : '94px'};
  margin: 0 auto;
  padding: 0 30px;
  transition: height 0.2s ease-in-out;
`;

const UpperContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 33px;
`;

const Navigation = styled.div`
  display: flex;
  align-items: center;
`;

const NavTab = styled.span<{ $borderLine: boolean }>`
  position: relative;
  margin-left: 46px;
  color: rgb(255, 255, 255);
  font-size: 2rem;
  font-weight: 500;
  line-height: 24px;
  cursor: pointer;

  &:first-child {
    margin-left: 0;
  }

  &::after {
    content: ''; // 안에 내용 비우기
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 100%;
    height: 2px;
    background-color: rgb(23, 60, 254);
    transform-origin: 0 0; // 그어지는 밑줄이 시작하는 좌표
    transform: ${({ $borderLine }) =>
      $borderLine ? 'scaleX(1)' : 'scaleX(0)'};
    transition: transform 0.3s cubic-bezier(0.22, 0.61, 0.36, 1) 0s;
  }
`;

const DropdownContainer = styled.div<{
  $isHoverTechnology: boolean;
  $hoveredNavId: string;
}>`
  display: ${({ $isHoverTechnology }) =>
    $isHoverTechnology ? 'flex' : 'none'};
  display: ${({ $hoveredNavId }) => $hoveredNavId === 'Technology' && 'flex'};
  justify-content: center;
  align-items: center;
  margin-top: 48px;
  white-space: pre-wrap;
  z-index: 300;
`;

const Dropdown = styled.span<{ $borderLine: boolean }>`
  position: relative;
  display: block;
  margin-left: 40px;
  color: rgb(255, 255, 255);
  font-size: 2rem;
  line-height: 24px;
  cursor: pointer;

  &:first-child {
    margin-left: 0;
  }

  &::after {
    content: ''; // 안에 내용 비우기
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 100%;
    height: 2px;
    background-color: rgb(23, 60, 254);
    transform-origin: 0 0; // 그어지는 밑줄이 시작하는 좌표
    transform: ${({ $borderLine }) =>
      $borderLine ? 'scaleX(1)' : 'scaleX(0)'};
    transition: transform 0.3s cubic-bezier(0.22, 0.61, 0.36, 1) 0s;
  }
`;

const LanguageSelector = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  color: rgb(255, 255, 255);
  z-index: 700;
  cursor: pointer;

  &:hover {
    color: rgb(111, 117, 123);
    border-radius: 4px;
    background-color: rgb(246, 247, 248);
  }
`;

const ModalTopMargin = styled.div<{
  $isHoverLanguage: boolean;
}>`
  position: absolute;
  top: 90%;
  right: -85%;
  display: ${({ $isHoverLanguage }) => ($isHoverLanguage ? 'block' : 'none')};
  width: 80px;
  height: 30px;
  cursor: default;
`;

const LanguageModal = styled.ul`
  position: absolute;
  top: 20px;
  right: -0.5px;
  width: 100%;
  padding: 12px 0;
  background-color: rgb(255, 255, 255);
  border-radius: 4px;
  animation: fade-in 0.2s;

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const LanguageListItem = styled.li<{ $isSelectedLanguage: boolean }>`
  padding: 10px 0;
  color: ${({ $isSelectedLanguage }) =>
    $isSelectedLanguage ? 'rgb(0, 0, 0)' : 'rgb(111, 117, 123)'};
  font-size: 1.7rem;
  font-weight: 500;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;
