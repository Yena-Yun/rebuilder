import { Link } from 'react-router-dom';

interface LogoProps {
  image: string;
}

export const Logo = ({ image }: LogoProps) => {
  return (
    <Link
      to='https://rebuilderai.com'
      target='_blank'
      aria-label='Go Back to HomePage'
    >
      <img src={image} alt='service-logo' />
    </Link>
  );
};
