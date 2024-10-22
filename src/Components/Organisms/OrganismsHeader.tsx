import AtomsTitleName from '../Atoms/AtomsTitleName';
import MoleculesDarkModeButton from '../Molecules/MoleculesDarkModeButton';
import MoleculesNavigationMenu from '../Molecules/MoleculesNavigationMenu';
import { routes } from '../../Routes/routes';

export default function OrganismsHeader() {
  return (
    <header className="outline outline-2 outline-primary flex justify-between items-center">
      <MoleculesNavigationMenu routes={routes} />
      <AtomsTitleName>ALAN LIMA</AtomsTitleName>
      <MoleculesDarkModeButton />
    </header>
  );
}
