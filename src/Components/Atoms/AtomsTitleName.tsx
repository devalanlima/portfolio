import { Link } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
  path?: string;
}

export default function AtomsTitleName({ children, path = '/' }: Props) {
  return (
    <h1 className={'font-AbrilFatface text-xl m-0 text-primary'}>
      <Link to={path}>{children}</Link>
    </h1>
  );
}
