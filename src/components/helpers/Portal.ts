import { createPortal } from 'react-dom';

interface PortalProps {
  children: React.ReactNode;
}

export const Portal = ({ children }: PortalProps) => {
  const el = document.getElementById('modal') as HTMLDivElement;

  return createPortal(children, el);
};
