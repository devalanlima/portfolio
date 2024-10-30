import { useEffect, useRef, useState } from 'react';
import AtomsOutlinedButton from '../Atoms/AtomsOutlinedButton';
import IconsMenu from '../Icons/IconsMenu';
import IconsClose from '../Icons/IconsClose';
import { Link, RouteObject } from 'react-router-dom';

interface Props {
  routes: Array<RouteObject>;
}

export default function MoleculesNavigationMenu({ routes }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const navRef = useRef<HTMLElement | null>(null);
  const MenuIcon = isMenuOpen ? IconsClose : IconsMenu;

  const toggleMenuView = () => {
    setIsMenuOpen(prevMode => !prevMode);
  };

  const handleClickOutside = (event: MouseEvent | null) => {
    if (
      event &&
      navRef.current &&
      !navRef.current.contains(event.target as Node)
    ) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative z-50">
      <AtomsOutlinedButton onClick={toggleMenuView} aria-expanded={isMenuOpen}>
        <MenuIcon className="w-[28px] h-[28px]" />
      </AtomsOutlinedButton>
      {isMenuOpen && (
        <nav
          ref={navRef}
          className="text-primary font-CourierPrime text-lg absolute top-[calc(100%_+2px)] left-0"
        >
          <ul className="flex flex-col gap-[2px]">
            {routes.map(
              route =>
                route.path && (
                  <li
                    key={route.path}
                    className="outline outline-2 outline-primary bg-secondary"
                  >
                    <Link className="px-4 py-1 flex" to={route.path}>
                      {route.id}
                    </Link>
                  </li>
                )
            )}
          </ul>
        </nav>
      )}
    </div>
  );
}
