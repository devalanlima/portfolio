import { useEffect, useRef, useState } from 'react';
import AtomsOutlinedButton from '../Atoms/AtomsOutlinedButton';
import IconsMenu from '../Icons/IconsMenu';
import IconsClose from '../Icons/IconsClose';
import { Link, RouteObject } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

interface Props {
  routes: Array<RouteObject>;
  className?: string;
}

export default function MoleculesNavigationMenu({ routes, className }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const $menu = useRef<HTMLDivElement | null>(null);
  const MenuIcon = isMenuOpen ? IconsClose : IconsMenu;

  const toggleMenuView = () => {
    setIsMenuOpen(prevMode => !prevMode);
  };

  const handleClickOutside = (event: MouseEvent | null) => {
    if (
      event &&
      $menu.current &&
      !$menu.current.contains(event.target as Node)
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
    <div className={twMerge('relative z-50', className)} ref={$menu}>
      <AtomsOutlinedButton
        onClick={toggleMenuView}
        aria-expanded={isMenuOpen}
        className="sm:hidden"
      >
        <MenuIcon className="h-[28px] w-[28px]" />
      </AtomsOutlinedButton>
      <nav
        className={`absolute left-0 top-[calc(100%_+2px)] sm:relative ${isMenuOpen ? 'block' : 'hidden sm:block'}`}
      >
        <ul className="flex flex-col gap-[2px] sm:flex-row">
          {routes.map(
            route =>
              route.path && (
                <li
                  key={route.path}
                  className="bg-secondary pt-1 font-CourierPrime text-lg text-primary outline outline-2 outline-primary hover:bg-primary hover:text-secondary sm:font-semibold sm:outline-none sm:hover:bg-secondary sm:hover:text-primary sm:hover:underline sm:hover:underline-offset-1 md:text-xl"
                >
                  <Link className="flex px-4 py-1" to={route.path}>
                    {route.id}
                  </Link>
                </li>
              )
          )}
        </ul>
      </nav>
    </div>
  );
}
