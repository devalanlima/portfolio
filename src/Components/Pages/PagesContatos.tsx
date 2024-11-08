import AtomsCard from '../Atoms/AtomsCard';
import AtomsTitle from '../Atoms/AtomsTitle';
import MoleculesMyLinks from '../Molecules/MoleculesMyLinks';
import OrganismsContactForm from '../Organisms/OrganismsContactForm';
import TemplatesMain from '../Templates/TemplatesMain';
import { links } from '../../data/myLinks';
import AtomsParagraph from '../Atoms/AtomsParagraph';
import AtomsAnimatedSpiral from '../Atoms/AtomsAnimatedSpiral';

export default function PagesContatos() {
  return (
    <TemplatesMain>
      <main className="flex w-full flex-col gap-6 overflow-x-hidden px-4 py-6 md:gap-10 md:py-10">
        <AtomsTitle smallText="MEUS" bigText="CONTATOS" />
        <div className="grid w-full grid-cols-[repeat(auto-fit,_minmax(100px,_1fr))] gap-10">
          <AtomsAnimatedSpiral />
          <AtomsCard className="flex w-[calc(100vw_+10px)] flex-col gap-6 p-7 pr-14 md:w-auto">
            <OrganismsContactForm />
            <AtomsParagraph className="text-base">
              (21) 99605-8924
            </AtomsParagraph>
            <AtomsParagraph className="text-base">
              dev.alanlima@gmail.com
            </AtomsParagraph>
            <MoleculesMyLinks links={links} />
          </AtomsCard>
        </div>
      </main>
    </TemplatesMain>
  );
}
