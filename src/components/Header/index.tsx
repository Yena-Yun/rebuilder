import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import i18n from 'i18next';
import { useMediaQuery } from 'react-responsive';
import {
  LogoImage,
  LanguageImage,
  MenuImage,
  CloseImage,
  MobileLogoImage,
} from './svgs/HeaderIcons';
import {
  Flex,
  FlexAlignCenter,
  FlexBetweenCenter,
  FlexCenter,
} from '../../styles/flex';

export const Header = () => {
  const [hoveredNavId, setHoveredNavId] = useState('');
  const [isHoverTechnology, setIsHoverTechnology] = useState(false);
  const [isHoverLanguage, setIsHoverLanguage] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('KOR');
  const [selectedMobileLanguage, setSelectedMobileLanguage] = useState('KOR');
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDropdownText, setShowDropdownText] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowDropdownText((prev) => !prev);
    }, 300);
  }, [showDropdown]);

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  const isTablet = useMediaQuery({
    query: '(max-width: 768px)',
  });

  const showMobileDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  return (
    <Container>
      <InnerContainer
        id='header'
        $isHoverTechnology={isHoverTechnology}
        $showDropdown={showDropdown}
      >
        <UpperContainer>
          <Link
            to='https://rebuilderai.com'
            target='_blank'
            aria-label='Go Back to HomePage'
          >
            <img
              src={isTablet ? MobileLogoImage : LogoImage}
              alt='service-logo'
            />
          </Link>

          {isTablet && (
            <MenuSelector onClick={showMobileDropdown}>
              {showDropdown ? (
                <img src={CloseImage} alt='close-icon' />
              ) : (
                <img src={MenuImage} alt='menu-icon' />
              )}
            </MenuSelector>
          )}

          {!isTablet && (
            <>
              <FlexAlignCenter>
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
              </FlexAlignCenter>

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
            </>
          )}
        </UpperContainer>

        {!isTablet && (
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
        )}

        <>
          {isTablet && showDropdown && (
            <MobileDropdownContainer id='tab-header-nav'>
              <MobileMenu style={{ opacity: showDropdownText ? 1 : 0 }}>
                Service
              </MobileMenu>
              <MobileMenu style={{ opacity: showDropdownText ? 1 : 0 }}>
                Technology
              </MobileMenu>
              <MobileMenu style={{ opacity: showDropdownText ? 1 : 0 }}>
                About
              </MobileMenu>
              <MobileMenu style={{ opacity: showDropdownText ? 1 : 0 }}>
                Contact
              </MobileMenu>
              <Flex>
                <MobileMenu style={{ opacity: showDropdownText ? 1 : 0 }}>
                  <Flex>
                    <MobileLanguage
                      onClick={() => {
                        changeLanguage('ko');
                        setSelectedMobileLanguage('KOR');
                        setShowDropdown(false);
                      }}
                      $isSelectedLanguage={selectedMobileLanguage === 'KOR'}
                    >
                      KOR
                    </MobileLanguage>
                    <Bar>
                      <hr />
                    </Bar>
                    <MobileLanguage
                      onClick={() => {
                        changeLanguage('en');
                        setSelectedMobileLanguage('ENG');
                        setShowDropdown(false);
                      }}
                      $isSelectedLanguage={selectedMobileLanguage === 'ENG'}
                    >
                      ENG
                    </MobileLanguage>
                  </Flex>
                </MobileMenu>
              </Flex>
            </MobileDropdownContainer>
          )}
        </>
      </InnerContainer>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  width: 100%;
  border-bottom: 1px solid rgb(0, 0, 0);
  background-color: rgb(0, 0, 0);
  z-index: 500;
`;

const InnerContainer = styled.div<{
  $isHoverTechnology: boolean;
  $showDropdown: boolean;
}>`
  width: 1200px;
  height: ${({ $isHoverTechnology }) =>
    $isHoverTechnology ? '181px' : '94px'};
  margin: 0 auto;
  padding: 0 30px;
  transition: all 0.2s ease-in-out 0s;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: ${({ $showDropdown }) => ($showDropdown ? '350px' : '64px')};
    padding: 0 60px;
    background-color: rgb(0, 0, 0);
  }
`;

const UpperContainer = styled(FlexBetweenCenter)`
  position: relative;
  padding-top: 33px;

  @media screen and (max-width: 768px) {
    padding: 20px 0;
  }
`;

const MenuSelector = styled.div`
  cursor: pointer;
`;

const MobileDropdownContainer = styled.div<{ $showDropdown?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding-top: 32px;
`;

const MobileMenu = styled.span<{ $showDropdown?: boolean }>`
  position: relative;
  width: 100%;
  color: rgb(255, 255, 255);
  font-size: 2rem;
  font-weight: 500;
  line-height: 24px;
  opacity: ${({ $showDropdown }) => ($showDropdown ? 1 : 0)};
  cursor: pointer;
  z-index: 0;

  @media screen and (max-width: 768px) {
    font-size: 16px;
    line-height: 19px;

    &::after {
      content: '';
      position: absolute;
      top: -16px;
      left: -60px;
      width: 100vw;
      height: 51px;
      transform-origin: 0px 0px;
      transform: scaleX(0);
      transition: transform 0.3s cubic-bezier(0.22, 0.61, 0.36, 1) 0s;
      z-index: -1;
    }
  }

  &::after {
    background-color: rgb(20, 20, 20);
  }

  &:hover::after {
    transform-origin: 0px 0px;
    transform: scaleX(1);
    backface-visibility: hidden;
  }
`;

const MobileLanguage = styled.span<{ $isSelectedLanguage: boolean }>`
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 19px;
  color: ${({ $isSelectedLanguage }) =>
    $isSelectedLanguage ? 'rgb(255, 255, 255)' : 'rgb(111, 117, 123)'};
  cursor: pointer;
`;

const Bar = styled(Flex)`
  height: 12px;
  background-color: rgb(111, 117, 123);
  margin: 3px 8px;

  & hr {
    height: auto;
    margin: 8px 0;
    flex-shrink: 0;
    align-self: stretch;
    border-width: 0 thin 0 0;
    border-style: solid;
    border-color: rgba(0, 0, 0, 0.12);
  }
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
  transition: all 0.2s ease-in-out 0s;
`;

const Dropdown = styled.span<{ $borderLine: boolean }>`
  position: relative;
  display: block;
  margin-left: 40px;
  color: rgb(255, 255, 255);
  font-size: 2rem;
  line-height: 24px;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    font-size: 16px;
    line-height: 19px;

    &::after {
      content: '';
      position: absolute;
      top: -16px;
      left: -60px;
      width: 100vw;
      height: 51px;
      transform-origin: 0 0;
      transform: scaleX(0);
      transition: transform 0.3s cubic-bezier(0.22, 0.61, 0.36, 1) 0s;
      z-index: -1;

      &:hover {
        transform-origin: 0 0;
        transform: scaleX(1);
        backface-visibility: hidden;
      }
    }
  }

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

const LanguageSelector = styled(FlexCenter)`
  position: relative;
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
