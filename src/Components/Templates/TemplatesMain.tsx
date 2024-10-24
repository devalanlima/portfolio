import OrganismsFooter from '../Organisms/OrganismsFooter';
import OrganismsHeader from '../Organisms/OrganismsHeader';

interface Props {
  children: React.ReactNode;
}

export default function TemplatesMain({ children }: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <OrganismsHeader />
      <div className="flex-grow">{children}</div>
      <OrganismsFooter />
    </div>
  );
}
