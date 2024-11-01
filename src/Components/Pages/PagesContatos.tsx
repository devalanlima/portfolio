import AtomsCard from '../Atoms/AtomsCard';
import AtomsHeader from '../Atoms/AtomsHeader';
import MoleculesMyLinks from '../Molecules/MoleculesMyLinks';
import OrganismsContactForm from '../Organisms/OrganismsContactForm';
import TemplatesMain from '../Templates/TemplatesMain';
import { links } from '../../data/myLinks';
import AtomsParagraph from '../Atoms/AtomsParagraph';

export default function PagesContatos() {
  return (
    <TemplatesMain>
      <main className="px-4 py-6 flex flex-col gap-6 overflow-x-hidden">
        <AtomsHeader smallText="MEUS" bigText="CONTATOS" />
        <AtomsCard className="w-[calc(100vw_+10px)] p-7 pr-14 flex flex-col gap-6">
          <OrganismsContactForm />
          <AtomsParagraph className="text-base">(21) 99605-8924</AtomsParagraph>
          <AtomsParagraph className="text-base">
            dev.alanlima@gmail.com
          </AtomsParagraph>
          <MoleculesMyLinks links={links} />
        </AtomsCard>
      </main>
    </TemplatesMain>
  );
}
