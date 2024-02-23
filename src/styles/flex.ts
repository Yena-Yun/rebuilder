import styled from 'styled-components';

export const Flex = styled.div`
  display: flex;
`;

export const FlexColumn = styled(Flex)`
  flex-direction: column;
`;

export const FlexColumnCenter = styled(FlexColumn)`
  align-items: center;
`;

export const FlexBetween = styled(Flex)`
  justify-content: space-between;
`;

export const FlexBetweenCenter = styled(FlexBetween)`
  align-items: center;
`;

export const FlexAlignCenter = styled(Flex)`
  align-items: center;
`;

export const FlexCenter = styled(FlexAlignCenter)`
  justify-content: center;
`;
