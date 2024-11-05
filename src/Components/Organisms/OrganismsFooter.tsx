import { links } from '../../data/myLinks';
import MoleculesMyLinks from '../Molecules/MoleculesMyLinks';

export default function OrganismsFooter() {
  return (
    <footer className="flex w-full items-center justify-center p-3 outline outline-2 outline-primary">
      <MoleculesMyLinks links={links} />
    </footer>
  );
}
