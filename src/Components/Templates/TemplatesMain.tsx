import { useLocation } from 'react-router-dom';
import OrganismsFooter from '../Organisms/OrganismsFooter';
import OrganismsHeader from '../Organisms/OrganismsHeader';

interface Props {
  children: React.ReactNode;
}

export default function TemplatesMain({ children }: Props) {
  const atualRoute = useLocation();
  return (
    <div className="flex min-h-screen flex-col">
      <OrganismsHeader />
      <div className="mx-auto flex w-full max-w-[1300px] flex-grow">
        {children}
      </div>
      {atualRoute.pathname !== '/portfolio/contatos' && <OrganismsFooter />}
    </div>
  );
}
