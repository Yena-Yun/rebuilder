import styled from 'styled-components';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';

interface AnimationProps {
  delay: number;
  children: React.ReactNode;
}

export const AnimationContainer = ({ delay, children }: AnimationProps) => {
  const { scrollRef, isInViewport } = useIntersectionObserver({
    rootMargin: '0px',
  });

  return (
    <Container
      ref={scrollRef}
      className={isInViewport ? 'frame-in' : ''}
      $delay={delay}
    >
      {children}
    </Container>
  );
};

const Container = styled.div<{ $delay: number }>`
  opacity: 0;
  margin-bottom: 4.6px;

  &.frame-in {
    animation: ${({ $delay }) =>
      `1s ease-in-out ${$delay}s 1 normal forwards running easeInOut`};

    @keyframes easeInOut {
      0% {
        opacity: 0;
        transform: translate3d(0, 50px, 0);
      }

      100% {
        opacity: 1;
        transform: translateZ(0);
      }
    }
  }
`;
