import { useState } from 'react';
import styled from 'styled-components';
import { MobileHeader } from './MobileHeader';
import { LargerHeader } from './LargerHeader';
import { useMedia } from 'utils/Query';

export const Header = () => {
  const [isShowDropdown, setIsShowDropdown] = useState(false);
  const [isShowMenu, setIsShowMenu] = useState(false);

  const { isTablet } = useMedia();

  const showDropdown = () => {
    setIsShowDropdown(true);
  };

  const hideDropdown = () => {
    setIsShowDropdown(false);
  };

  const showMenu = () => {
    setIsShowMenu(true);
  };

  const hideMenu = () => {
    setIsShowMenu(false);
  };

  return (
    <Container>
      <InnerContainer
        id='header'
        $isHoverDropdown={isShowDropdown}
        $isShowMenu={isShowMenu}
      >
        {isTablet ? (
          <MobileHeader menuGroup={{ isShowMenu, showMenu, hideMenu }} />
        ) : (
          <LargerHeader
            dropdownGroup={{ isShowDropdown, showDropdown, hideDropdown }}
          />
        )}
      </InnerContainer>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.color.black};
  background-color: ${({ theme }) => theme.color.black};
  z-index: 500;
`;

const InnerContainer = styled.div<{
  $isHoverDropdown: boolean;
  $isShowMenu: boolean;
}>`
  width: 1200px;
  height: ${({ $isHoverDropdown }) => ($isHoverDropdown ? '181px' : '94px')};
  margin: 0 auto;
  padding: 0 30px;
  transition: all 0.2s ease-in-out 0s;

  @media ${({ theme }) => theme.media.tabletS} {
    width: 100%;
    height: ${({ $isShowMenu }) => ($isShowMenu ? '350px' : '64px')};
    padding: 0 60px;
    background-color: ${({ theme }) => theme.color.black};
  }
`;
