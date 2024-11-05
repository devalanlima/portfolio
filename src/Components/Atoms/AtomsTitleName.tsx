import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

interface Props {
  children: React.ReactNode;
  path?: string;
  className?: string;
}

export default function AtomsTitleName({
  children,
  path = '/',
  className,
}: Props) {
  return (
    <h1
      className={twMerge(
        'm-0 font-AbrilFatface text-xl text-primary md:text-2xl',
        className
      )}
    >
      <Link to={path}>{children}</Link>
    </h1>
  );
}
