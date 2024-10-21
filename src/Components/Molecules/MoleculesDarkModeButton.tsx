import { useEffect, useState } from 'react';
import AtomsOutlinedButton from '../Atoms/AtomsOutlinedButton';
import IconsMoon from '../Icons/IconsMoon';
import IconsSun from '../Icons/IconsSun';
import { Themes } from '../../types/themes';

export default function MoleculesDarkModeButton() {
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
    <AtomsOutlinedButton onClick={toggleTheme}>
      {isDarkMode ? (
        <IconsSun className="w-[28px] h-[28px]" />
      ) : (
        <IconsMoon className="w-[28px] h-[28px]" />
      )}
    </AtomsOutlinedButton>
  );
}
