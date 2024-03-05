import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { LogoResponsive } from '../shared/LogoResponsive';
import { useDelayText } from '../hooks/useDelayText';
import { changeLanguage } from '../utils/changeLanguage';
import { KOR, LANGUAGES, MENUS, TECHNOLOGY, TECH_MENUS } from '../constants';
import { LogoImage, LanguageImage } from '../icons';
import { FlexAlignCenter, FlexBetweenCenter, FlexCenter } from 'styles/flex';

interface HeaderProps {
  dropdownGroup: {
    isShowDropdown: boolean;
    showDropdown: () => void;
    hideDropdown: () => void;
  };
}

export const LargerHeader = ({ dropdownGroup }: HeaderProps) => {
  const [hoveredMenu, setHoveredMenu] = useState('');
  const [isHoverLanguage, setIsHoverLanguage] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(KOR);

  const { isShowDropdown, showDropdown, hideDropdown } = dropdownGroup;

  const { isShowMenuText } = useDelayText(isShowDropdown);

  const showLanguageModal = () => {
    setIsHoverLanguage(true);
  };

  const hideLanguageModal = () => {
    setIsHoverLanguage(false);
  };

  return (
    <>
      <UpperContainer>
        <LogoResponsive image={<LogoImage />} />

        <FlexAlignCenter>
          {MENUS.map(({ name, link }) => (
            <NavTab
              key={name}
              onMouseOver={() => {
                setHoveredMenu(name);
                name === TECHNOLOGY ? showDropdown() : hideDropdown();
              }}
              onMouseLeave={() => setHoveredMenu('')}
              $borderLine={hoveredMenu === name}
            >
              <Link to={link} target='_blank'>
                {name}
              </Link>
            </NavTab>
          ))}
        </FlexAlignCenter>

        <div></div>

        <LanguageSelector
          onMouseOver={showLanguageModal}
          onMouseLeave={hideLanguageModal}
        >
          <LanguageImage />
          {isHoverLanguage && (
            /* ModalTopMargin: hover 시 뜨는 모달과 language 아이콘 사이의 빈 공간 */
            <ModalTopMargin $isHoverLanguage={isHoverLanguage}>
              <LanguageModal>
                {LANGUAGES.map(({ code, display }: (typeof LANGUAGES)[0]) => (
                  <LanguageListItem
                    key={code}
                    onClick={() => {
                      changeLanguage(code);
                      setSelectedLanguage(display);
                    }}
                    $isSelectedLanguage={selectedLanguage === display}
                  >
                    {display}
                  </LanguageListItem>
                ))}
              </LanguageModal>
            </ModalTopMargin>
          )}
        </LanguageSelector>
      </UpperContainer>

      <DropdownContainer
        $isHoverDropdown={isShowDropdown}
        $hoveredMenu={hoveredMenu}
        onMouseLeave={() => hideDropdown()}
      >
        {TECH_MENUS.map((menu, i) => (
          <Dropdown
            key={menu}
            onMouseOver={() => {
              setHoveredMenu(menu);
              showDropdown();
            }}
            onMouseLeave={() => setHoveredMenu('')}
            $borderLine={hoveredMenu === menu}
            $delayTextShowing={isShowMenuText}
          >
            <Link to={`/technology?section=${i + 4}`}>{menu}</Link>
          </Dropdown>
        ))}
      </DropdownContainer>
    </>
  );
};

const UpperContainer = styled(FlexBetweenCenter)`
  position: relative;
  padding-top: 33px;

  @media ${({ theme }) => theme.media.tabletS} {
    padding: 20px 0;
  }
`;

const NavTab = styled.span<{ $borderLine: boolean }>`
  position: relative;
  margin-left: 46px;
  color: ${({ theme }) => theme.color.white};
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
    background-color: ${({ theme }) => theme.color.blue2};
    transform-origin: 0 0;
    transform: ${({ $borderLine }) =>
      $borderLine ? 'scaleX(1)' : 'scaleX(0)'};
    transition: transform 0.3s cubic-bezier(0.22, 0.61, 0.36, 1) 0s;
  }
`;

const DropdownContainer = styled(FlexCenter)<{
  $isHoverDropdown: boolean;
  $hoveredMenu: string;
}>`
  display: ${({ $isHoverDropdown, $hoveredMenu }) =>
    $isHoverDropdown || $hoveredMenu === 'Technology' ? 'flex' : 'none'};
  margin-top: 48px;
  white-space: pre-wrap;
  transition: all 0.2s ease-in-out 0s;
`;

const Dropdown = styled.span<{
  $borderLine: boolean;
  $delayTextShowing: boolean;
}>`
  opacity: ${({ $delayTextShowing }) => ($delayTextShowing ? 1 : 0)} !important;
  position: relative;
  display: block;
  margin-left: 40px;
  color: ${({ theme }) => theme.color.white};
  font-size: 2rem;
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
    background-color: ${({ theme }) => theme.color.blue2};
    transform-origin: 0 0;
    transform: ${({ $borderLine }) =>
      $borderLine ? 'scaleX(1)' : 'scaleX(0)'};
    transition: transform 0.3s cubic-bezier(0.22, 0.61, 0.36, 1) 0s;
  }

  @media ${({ theme }) => theme.media.tabletS} {
    font-size: 16px;
    line-height: 19px;

    &::after {
      top: -16px;
      left: -60px;
      width: 100vw;
      height: 51px;
      transform-origin: 0 0;
      transform: scaleX(0);
      transition: transform 0.3s cubic-bezier(0.22, 0.61, 0.36, 1) 0s;
      z-index: -1;

      &:hover {
        transform: scaleX(1);
        backface-visibility: hidden;
      }
    }
  }
`;

const LanguageSelector = styled(FlexCenter)`
  position: relative;
  width: 30px;
  height: 30px;
  color: ${({ theme }) => theme.color.white};
  z-index: 700;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.color.gray4};
    border-radius: 4px;
    background-color: ${({ theme }) => theme.color.gray1};
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
  background-color: ${({ theme }) => theme.color.white};
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
  color: ${({ $isSelectedLanguage, theme }) =>
    $isSelectedLanguage ? theme.color.black : theme.color.gray4};
  font-size: 1.7rem;
  font-weight: 500;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.color.lightBlack1};
  }
`;
