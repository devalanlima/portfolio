import { twMerge } from 'tailwind-merge';
import { Themes } from '../../types/themes';

interface Props {
  skill?: Themes;
  color?: boolean;
}

export default function AtomsChip({ skill = 'dark', color = false }: Props) {
  const chipStyle: Record<Themes, string> = {
    light: 'bg-secondary text-primary outline-primary',
    dark: 'bg-primary text-secondary outline-secondary',
    typescript: 'bg-typescript text-white outline-white',
    javascript: 'bg-javascript text-black outline-black',
    vue: 'bg-vue-1 text-vue-2 outline-vue-2',
    react: 'bg-white text-react outline-react',
    tailwindcss: 'bg-tailwindcss text-white outline-white',
    html: 'bg-html text-white outline-white',
    css: 'bg-css text-white outline-white',
    git: 'bg-git-1 text-git-2 outline-git-2',
    photoshop: 'bg-photoshop-1 text-photoshop-2 outline-photoshop-2',
    figma: 'bg-black text-white outline-white',
    github: 'bg-black text-white outline-white',
  };

  return (
    <div
      className={twMerge(
        'flex w-fit cursor-pointer rounded-full bg-primary px-3 py-1 font-CourierPrime text-xs font-bold leading-none text-secondary outline outline-2 outline-secondary hover:scale-105 hover:bg-secondary hover:text-primary hover:outline-primary',
        color && chipStyle[skill]
      )}
    >
      <span className="mt-1">
        {skill.charAt(0).toUpperCase() + skill.slice(1)}
      </span>
    </div>
  );
}
