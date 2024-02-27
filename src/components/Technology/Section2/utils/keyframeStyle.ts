import { keyframes } from 'styled-components';

export const easeInOut = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(0, 50px, 0);
  }

  100% {
    opacity: 1;
    transform: translateZ(0);
  }
`;
