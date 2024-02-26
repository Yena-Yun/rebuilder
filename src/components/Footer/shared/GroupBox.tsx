import styled from 'styled-components';
import { Flex } from 'styles/flex';

interface GroupBoxProps {
  $mb: string;
  $flex: string;
  $gap?: string;
  children: React.ReactNode;
}

export const GroupBox = ({ $mb, $flex, $gap, children }: GroupBoxProps) => {
  return (
    <Container $mb={$mb} $flex={$flex} $gap={$gap}>
      {children}
    </Container>
  );
};

const Container = styled(Flex)<Omit<GroupBoxProps, 'children'>>`
  ${({ $flex }) => ($flex === 'col' ? `flex-direction: column` : '')};
  ${({ $gap }) => ($gap ? `gap: ${$gap}px` : '')};
  margin-bottom: ${({ $mb }) => $mb}px;
`;
