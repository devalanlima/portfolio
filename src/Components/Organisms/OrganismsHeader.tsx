import AtomsTitleName from '../Atoms/AtomsTitleName';
import MoleculesDarkModeButton from '../Molecules/MoleculesDarkModeButton';
import MoleculesNavigationMenu from '../Molecules/MoleculesNavigationMenu';
import { routes } from '../../Routes/routes';

export default function OrganismsHeader() {
  return (
    <header className="outline outline-2 outline-primary">
      <div className="mx-auto flex max-w-[1300px] items-center justify-between sm:px-5 md:py-2">
        <MoleculesNavigationMenu className="sm:order-1" routes={routes} />

        <AtomsTitleName className="sm:order-0">ALAN LIMA</AtomsTitleName>

        <MoleculesDarkModeButton className="sm:order-2 sm:outline-none" />
      </div>
    </header>
  );
}
