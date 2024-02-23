import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Language, MenuSelector } from './shared';
import { MobileLogoImage } from '../utils/iconImported';
import { Logo } from '../shared/Logo';
import { MENUS } from '../shared/constants';
import { FlexBetweenCenter } from '../../../styles/flex';

interface MobileHeaderProps {
  menuGroup: {
    isShowMenu: boolean;
    showMenu: () => void;
    hideMenu: () => void;
  };
}

export const MobileHeader = ({ menuGroup }: MobileHeaderProps) => {
  const [isShowMenuText, setIsShowMenuText] = useState(false);

  const { isShowMenu, showMenu, hideMenu } = menuGroup;

  useEffect(() => {
    delayShowDropdownText();
  }, [isShowMenu]);

  const delayShowDropdownText = () => {
    setTimeout(() => {
      setIsShowMenuText((prev) => !prev);
    }, 300);
  };

  return (
    <>
      <UpperContainer>
        <Logo image={MobileLogoImage} />
        <MenuSelector
          _onClick={isShowMenu ? hideMenu : showMenu}
          srcNalt={isShowMenu}
        />
      </UpperContainer>

      {isShowMenu && (
        <MobileDropdownContainer id='tab-header-nav'>
          {[...MENUS, <Language hideMenu={hideMenu} />].map((nav) => (
            <MobileMenu style={{ opacity: isShowMenuText ? 1 : 0 }}>
              {nav}
            </MobileMenu>
          ))}
        </MobileDropdownContainer>
      )}
    </>
  );
};

const UpperContainer = styled(FlexBetweenCenter)`
  position: relative;
  padding-top: 33px;

  @media (max-width: 768px) {
    padding: 20px 0;
  }
`;

const MobileDropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding-top: 32px;
`;

const MobileMenu = styled.span`
  position: relative;
  width: 100%;
  color: rgb(255, 255, 255);
  font-size: 2rem;
  font-weight: 500;
  line-height: 24px;
  cursor: pointer;
  z-index: 0;

  @media (max-width: 768px) {
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
