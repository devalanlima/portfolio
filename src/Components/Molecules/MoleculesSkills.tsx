import { Themes } from '../../types/themes';
import AtomsChip from '../Atoms/AtomsChip';

interface Props {
  skills: Array<Themes>;
  color?: boolean;
}

export default function MoleculesSkills({ skills, color }: Props) {
  const handleOnMouseEnter = (theme: string) => {
    document.documentElement.className = theme;
  };

  const handleOnMouseLeave = () => {
    document.documentElement.className =
      localStorage.getItem('theme') || 'light';
  };

  return (
    <ul className="flex flex-wrap items-center justify-center gap-2">
      {skills.map(skill => (
        <li
          key={skill}
          onMouseEnter={() => handleOnMouseEnter(skill)}
          onMouseLeave={handleOnMouseLeave}
        >
          <AtomsChip skill={skill} color={color} />
        </li>
      ))}
    </ul>
  );
}
