import AtomsChip from '../Atoms/AtomsChip';

interface Props {
  skills: Array<string>;
}

export default function MoleculesSkills({ skills }: Props) {
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
          <AtomsChip
            children={skill.charAt(0).toUpperCase() + skill.slice(1)}
          />
        </li>
      ))}
    </ul>
  );
}
