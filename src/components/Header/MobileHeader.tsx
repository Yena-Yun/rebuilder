import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MenuImage, CloseImage, MobileLogoImage } from './svgs/HeaderIcons';
import { Flex, FlexBetweenCenter } from '../../styles/flex';
import { useEffect, useState } from 'react';
import { changeLanguage } from 'i18next';

interface MobileHeaderProps {
  menuGroup: {
    isShowMenu: boolean;
    showMenu: () => void;
    hideMenu: () => void;
  };
}

export const MobileHeader = ({ menuGroup }: MobileHeaderProps) => {
  const [selectedMobileLanguage, setSelectedMobileLanguage] = useState('KOR');
  const [showDropdownText, setShowDropdownText] = useState(false);

  const { isShowMenu, showMenu, hideMenu } = menuGroup;

  useEffect(() => {
    setTimeout(() => {
      showMobileDropdownText();
    }, 300);
  }, [isShowMenu]);

  const showMobileDropdownText = () => {
    setShowDropdownText((prev) => !prev);
  };

  return (
    <>
      <UpperContainer>
        <Link
          to='https://rebuilderai.com'
          target='_blank'
          aria-label='Go Back to HomePage'
        >
          <img src={MobileLogoImage} alt='service-logo' />
        </Link>

        {isShowMenu ? (
          <MenuSelector onClick={hideMenu}>
            <img src={CloseImage} alt='close-icon' />
          </MenuSelector>
        ) : (
          <MenuSelector onClick={showMenu}>
            <img src={MenuImage} alt='menu-icon' />
          </MenuSelector>
        )}
      </UpperContainer>

      {isShowMenu && (
        <MobileDropdownContainer id='tab-header-nav'>
          {['Service', 'Technology', 'About', 'Contact'].map((nav) => (
            <MobileMenu style={{ opacity: showDropdownText ? 1 : 0 }}>
              {nav}
            </MobileMenu>
          ))}
          <MobileMenu style={{ opacity: showDropdownText ? 1 : 0 }}>
            <Flex>
              <MobileLanguage
                onClick={() => {
                  changeLanguage('ko');
                  setSelectedMobileLanguage('KOR');
                  hideMenu();
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
                  hideMenu();
                }}
                $isSelectedLanguage={selectedMobileLanguage === 'ENG'}
              >
                ENG
              </MobileLanguage>
            </Flex>
          </MobileMenu>
        </MobileDropdownContainer>
      )}
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

const MenuSelector = styled.div`
  cursor: pointer;
`;

const MobileDropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding-top: 32px;
`;

const MobileMenu = styled.span<{ $showMenu?: boolean }>`
  position: relative;
  width: 100%;
  color: rgb(255, 255, 255);
  font-size: 2rem;
  font-weight: 500;
  line-height: 24px;
  opacity: ${({ $showMenu }) => ($showMenu ? 1 : 0)};
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
