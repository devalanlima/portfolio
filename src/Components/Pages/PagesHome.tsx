import { Themes } from '../../types/themes';
import AtomsTitle from '../Atoms/AtomsTitle';
import AtomsParagraph from '../Atoms/AtomsParagraph';
import AtomsPeopleSVG from '../Atoms/AtomsPeopleSVG';
import MoleculesSkills from '../Molecules/MoleculesSkills';
import TemplatesMain from '../Templates/TemplatesMain';
import useBreakpoints from '../../hooks/useBreakpoints';

export default function PagesHome() {
  const breakpoint = useBreakpoints();

  const skills: Array<Themes> = [
    'typescript',
    'javascript',
    'vue',
    'react',
    'html',
    'css',
    'tailwindcss',
    'git',
    'github',
    'photoshop',
    'figma',
  ];

  return (
    <TemplatesMain>
      <main className="grid w-full place-items-center gap-6 px-4 py-6 md:grid-cols-2">
        <div className="flex max-w-[500px] flex-col gap-6 md:gap-10 lg:max-w-[650px]">
          <section className="flex flex-col gap-6 md:gap-10">
            <AtomsTitle smallText="DESENVOLVEDOR" bigText="FRONT-END" />
            <AtomsParagraph className="text-justify">
              Meu nome é Alan Lima, sou formado em Automação Industrial e
              Técnico em Eletrônica, com uma paixão crescente por
              desenvolvimento web. Atualmente, estou cursando Análise e
              Desenvolvimento de Sistemas e focando em me especializar como
              Desenvolvedor Front-End. Estou em busca de oportunidades para
              aplicar meus conhecimentos e contribuir para projetos inovadores.
            </AtomsParagraph>
            {!breakpoint.md && (
              <AtomsPeopleSVG className="mx-auto max-w-[400px] sm:max-w-[450px]" />
            )}
          </section>
          <section>
            <MoleculesSkills skills={skills} />
          </section>
        </div>
        {breakpoint.md && <AtomsPeopleSVG className="max-w-[450px]" />}
      </main>
    </TemplatesMain>
  );
}
