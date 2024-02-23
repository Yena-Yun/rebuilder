import styled from 'styled-components';
import { CloseImage, MenuImage } from '../../utils/iconImported';

interface MenuSelectorProps {
  _onClick: () => void;
  srcNalt: boolean;
}

export const MenuSelector = ({ _onClick, srcNalt }: MenuSelectorProps) => {
  return (
    <Container onClick={_onClick}>
      <img
        src={srcNalt ? CloseImage : MenuImage}
        alt={`${srcNalt ? 'close' : 'menu'}-icon`}
      />
    </Container>
  );
};

const Container = styled.div`
  cursor: pointer;
`;
