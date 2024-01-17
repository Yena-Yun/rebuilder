import { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as LogoImage } from '../../assets/svgs/logo.svg';
import { ReactComponent as LanguageImage } from '../../assets/svgs/language.svg';

export const Header = () => {
  const [isHoverNavIndex, setIsHoverNavIndex] = useState('');
  const [isHoverTechnology, setIsHoverTechnology] = useState(false);
  const [isHoverLanguage, setIsHoverLanguage] = useState(false);
  const [isSelectedLanguage, setIsSelectedLanguage] = useState(false);

  return (
    <Container>
      <InnerContainer id='header' isHoverTechnology={isHoverTechnology}>
        <UpperContainer>
          <LogoLink
            href='https://rebuilderai.com'
            aria-label='Go Back to HomePage'
          >
            <LogoImage />
          </LogoLink>

          <Navigation>
            {['Service', 'Technology', 'About', 'Contact'].map((nav) => {
              return nav === 'Technology' ? (
                <NavTab
                  borderLine={isHoverNavIndex === nav}
                  onMouseOver={() => {
                    setIsHoverNavIndex(nav);
                    setIsHoverTechnology(true);
                  }}
                  onMouseLeave={() => setIsHoverNavIndex('')}
                >
                  {nav}
                </NavTab>
              ) : (
                <NavTab
                  borderLine={isHoverNavIndex === nav}
                  onMouseOver={() => {
                    setIsHoverNavIndex(nav);
                    setIsHoverTechnology(false);
                  }}
                  onMouseLeave={() => setIsHoverNavIndex('')}
                >
                  {nav}
                </NavTab>
              );
            })}
          </Navigation>

          <Language>
            <LanguageImage />
          </Language>
          <LanguageModal isHoverLanguage={isHoverLanguage}>
            <LanguageListItem isSelectedLanguage={isSelectedLanguage}>
              KOR
            </LanguageListItem>
            <LanguageListItem isSelectedLanguage={isSelectedLanguage}>
              ENG
            </LanguageListItem>
          </LanguageModal>
        </UpperContainer>

        <DropdownContainer
          isHoverTechnology={isHoverTechnology}
          isHoverNavIndex={isHoverNavIndex}
        >
          {['광원추론', '재질추론', '실측크기', '3D 공간 영상'].map(
            (subNav) => (
              <Dropdown
                borderLine={isHoverNavIndex === subNav}
                onMouseOver={() => {
                  setIsHoverNavIndex(subNav);
                  setIsHoverTechnology(true);
                }}
                onMouseLeave={() => setIsHoverNavIndex('')}
              >
                {subNav}
              </Dropdown>
            )
          )}
        </DropdownContainer>
      </InnerContainer>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  top: 0;
  width: 100%;
  border-bottom: 1px solid rgb(0, 0, 0);
  background-color: rgb(0, 0, 0);
  z-index: 999;
`;

const InnerContainer = styled.div<{ isHoverTechnology: boolean }>`
  width: 100%;
  height: ${({ isHoverTechnology }) => (isHoverTechnology ? '181px' : '94px')};
  padding: 0 30px;
  transition: height 0.2s ease-in-out;
`;

const UpperContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 33px;
`;

const LogoLink = styled.a``;

const Navigation = styled.div`
  display: flex;
  align-items: center;
  height: 40px; // 밑줄 애니메이션 직후에 밑줄이 얇아지는 문제 해결
`;

const NavTab = styled.span<{ borderLine: boolean }>`
  position: relative;
  margin-left: 46px;
  color: rgb(255, 255, 255);
  font-size: 1.2rem;
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
    transform: ${({ borderLine }) => (borderLine ? 'scaleX(1)' : 'scaleX(0)')};
    transition: transform 0.3s cubic-bezier(0.22, 0.61, 0.36, 1) 0s;
  }
`;

const DropdownContainer = styled.div<{
  isHoverTechnology: boolean;
  isHoverNavIndex: string;
}>`
  display: ${({ isHoverTechnology }) => (isHoverTechnology ? 'flex' : 'none')};
  display: ${({ isHoverNavIndex }) =>
    isHoverNavIndex === 'Technology' && 'flex'};
  justify-content: center;
  align-items: center;
  margin-top: 48px;
  white-space: pre-wrap;
`;

const Dropdown = styled.span<{ borderLine: boolean }>`
  position: relative;
  display: block;
  margin-left: 40px;
  color: rgb(255, 255, 255);
  font-size: 1.3rem;
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
    transform: ${({ borderLine }) => (borderLine ? 'scaleX(1)' : 'scaleX(0)')};
    transition: transform 0.3s cubic-bezier(0.22, 0.61, 0.36, 1) 0s;
  }
`;

const Language = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  color: rgb(255, 255, 255);
  cursor: pointer;

  &:hover {
    color: rgb(111, 117, 123);
    border-radius: 4px;
    background-color: rgb(246, 247, 248);
  }
`;

const LanguageModal = styled.ul<{ isHoverLanguage: boolean }>`
  display: ${({ isHoverLanguage }) => (isHoverLanguage ? 'block' : 'none')};
  width: 70px;
  background-color: rgb(255, 255, 255);
  border-radius: 4px;
`;

const LanguageListItem = styled.li<{ isSelectedLanguage: boolean }>`
  color: ${({ isSelectedLanguage }) =>
    isSelectedLanguage ? 'rgb(0, 0, 0)' : 'rgb(111, 117, 123)'};
  margin: 16px 0;
  text-align: center;
  font-size: 1rem;
  cursor: pointer;
`;
