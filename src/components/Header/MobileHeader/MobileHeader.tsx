import styled from 'styled-components';
import { Language } from './Language';
import { LogoResponsive } from '../shared/LogoResponsive';
import { useDelayText } from '../hooks/useDelayText';
import { MobileLogoImage } from '../utils/icons';
import { MENUS } from '../constants';
import { FlexBetweenCenter, FlexColumn } from 'styles/flex';
import { CloseImage, MenuImage } from '../utils/icons';


interface MobileHeaderProps {
  menuGroup: {
    isShowMenu: boolean;
    showMenu: () => void;
    hideMenu: () => void;
  };
}

export const MobileHeader = ({ menuGroup }: MobileHeaderProps) => {
  const { isShowMenu, showMenu, hideMenu } = menuGroup;

  const { isShowMenuText } = useDelayText(isShowMenu);

  return (
    <>
      <UpperContainer>
        <LogoResponsive image={<MobileLogoImage />} />
        <MenuSelector onClick={isShowMenu ? hideMenu : showMenu}>
          {isShowMenu ? <CloseImage /> : <MenuImage />}
        </MenuSelector>
      </UpperContainer>

      {isShowMenu && (
        <MobileDropdownContainer>
          {[...MENUS, <Language hideMenu={hideMenu} />].map((nav) => (
            <MobileMenu key={nav as string} $delayTextShowing={isShowMenuText}>
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

  @media ${({ theme }) => theme.media.tabletS} {
    padding: 20px 0;
  }
`;


const MenuSelector = styled.div`
  cursor: pointer;
`;

const MobileDropdownContainer = styled(FlexColumn)`
  gap: 32px;
  padding-top: 32px;
`;

const MobileMenu = styled.span<{ $delayTextShowing: boolean }>`
  opacity: ${({ $delayTextShowing }) => ($delayTextShowing ? 1 : 0)} !important;
  position: relative;
  width: 100%;
  color: rgb(255, 255, 255);
  font-size: 2rem;
  font-weight: 500;
  line-height: 24px;
  z-index: 0;
  cursor: pointer;

  @media ${({ theme }) => theme.media.tabletS} {
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
