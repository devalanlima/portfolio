import { useEffect, useState } from 'react';
import AtomsOutlinedButton from '../Atoms/AtomsOutlinedButton';
import IconsMoon from '../Icons/IconsMoon';
import IconsSun from '../Icons/IconsSun';
import { Themes } from '../../types/themes';

interface Props {
  className?: string;
}

export default function MoleculesDarkModeButton({ className }: Props) {
  const getInitialTheme = (): Themes => {
    const storedTheme = localStorage.getItem('theme') as Themes;
    return storedTheme
      ? storedTheme
      : window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
  };

  const [isDarkMode, setIsDarkMode] = useState<boolean>(
    getInitialTheme() === 'dark'
  );

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  useEffect(() => {
    document.documentElement.className = isDarkMode ? 'dark' : 'light';
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return (
    <AtomsOutlinedButton className={className} onClick={toggleTheme}>
      {isDarkMode ? (
        <IconsSun className="h-[28px] w-[28px]" />
      ) : (
        <IconsMoon className="h-[28px] w-[28px]" />
      )}
    </AtomsOutlinedButton>
  );
}
