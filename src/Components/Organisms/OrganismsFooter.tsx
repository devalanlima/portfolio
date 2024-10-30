import { links } from '../../data/myLinks';
import MoleculesMyLinks from '../Molecules/MoleculesMyLinks';

export default function OrganismsFooter() {
  return (
    <footer className="w-full outline outline-2 outline-primary flex justify-center items-center p-3">
      <MoleculesMyLinks links={links} />
    </footer>
  );
}
