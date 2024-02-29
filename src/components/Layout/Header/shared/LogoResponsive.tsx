import { Link } from 'react-router-dom';

interface LogoProps {
  image: React.ReactNode;
}

export const LogoResponsive = ({ image }: LogoProps) => {
  return (
    <Link
      to='https://rebuilderai.com'
      target='_blank'
      aria-label='Go Back to HomePage'
    >
      {image}
    </Link>
  );
};
