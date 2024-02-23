import styled from 'styled-components';
import { LogoImage, LanguageImage } from './svgs/HeaderIcons';
import {
  FlexAlignCenter,
  FlexBetweenCenter,
  FlexCenter,
} from '../../styles/flex';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { changeLanguage } from './utils';

interface HeaderProps {
  dropdownGroup: {
    isShowDropdown: boolean;
    showDropdown: () => void;
    hideDropdown: () => void;
  };
}

export const LargerHeader = ({ dropdownGroup }: HeaderProps) => {
  const [hoveredNavIndex, setNavIndex] = useState('');
  const [isHoverLanguage, setIsHoverLanguage] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('KOR');

  const { isShowDropdown, showDropdown, hideDropdown } = dropdownGroup;

  return (
    <>
      <UpperContainer>
        <Link
          to='https://rebuilderai.com'
          target='_blank'
          aria-label='Go Back to HomePage'
        >
          <img src={LogoImage} alt='service-logo' />
        </Link>

        <FlexAlignCenter>
          {['Service', 'Technology', 'About', 'Contact'].map((nav) => {
            return nav === 'Technology' ? (
              <NavTab
                key={nav}
                $borderLine={hoveredNavIndex === nav}
                onMouseOver={() => {
                  setNavIndex(nav);
                  showDropdown();
                }}
                onMouseLeave={() => setNavIndex('')}
              >
                {nav}
              </NavTab>
            ) : (
              <NavTab
                key={nav}
                $borderLine={hoveredNavIndex === nav}
                onMouseOver={() => {
                  setNavIndex(nav);
                  hideDropdown();
                }}
                onMouseLeave={() => setNavIndex('')}
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
      </UpperContainer>

      <DropdownContainer
        $isHoverDropdown={isShowDropdown}
        $hoveredNavIndex={hoveredNavIndex}
        onMouseLeave={() => hideDropdown()}
      >
        {['광원추론', '재질추론', '실측크기', '3D 공간 영상'].map((subNav) => (
          <Dropdown
            key={subNav}
            $borderLine={hoveredNavIndex === subNav}
            onMouseOver={() => {
              setNavIndex(subNav);
              showDropdown();
            }}
            onMouseLeave={() => setNavIndex('')}
          >
            {subNav}
          </Dropdown>
        ))}
      </DropdownContainer>
    </>
  );
};

const UpperContainer = styled(FlexBetweenCenter)`
  position: relative;
  padding-top: 33px;

  @media screen and (max-width: 768px) {
    padding: 20px 0;
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
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 100%;
    height: 2px;
    background-color: rgb(23, 60, 254);
    transform-origin: 0 0;
    transform: ${({ $borderLine }) =>
      $borderLine ? 'scaleX(1)' : 'scaleX(0)'};
    transition: transform 0.3s cubic-bezier(0.22, 0.61, 0.36, 1) 0s;
  }
`;

const DropdownContainer = styled.div<{
  $isHoverDropdown: boolean;
  $hoveredNavIndex: string;
}>`
  display: ${({ $isHoverDropdown }) => ($isHoverDropdown ? 'flex' : 'none')};
  display: ${({ $hoveredNavIndex }) =>
    $hoveredNavIndex === 'Technology' && 'flex'};
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
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 100%;
    height: 2px;
    background-color: rgb(23, 60, 254);
    transform-origin: 0 0;
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
