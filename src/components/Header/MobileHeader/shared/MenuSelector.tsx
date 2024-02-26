import styled from 'styled-components';
import { CloseImage, MenuImage } from '../../utils/iconImported';

interface MenuSelectorProps {
  isShowMenu: boolean;
  onClickFn: {
    showMenu: () => void;
    hideMenu: () => void;
  };
}

export const MenuSelector = ({ isShowMenu, onClickFn }: MenuSelectorProps) => {
  const { showMenu, hideMenu } = onClickFn;

  return (
    <Container onClick={isShowMenu ? hideMenu : showMenu}>
      {isShowMenu ? <CloseImage /> : <MenuImage />}
    </Container>
  );
};

const Container = styled.div`
  cursor: pointer;
`;
