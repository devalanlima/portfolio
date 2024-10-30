import { Themes } from '../../types/themes';
import AtomsHeader from '../Atoms/AtomsHeader';
import AtomsParagraph from '../Atoms/AtomsParagraph';
import AtomsPeopleSVG from '../Atoms/AtomsPeopleSVG';
import MoleculesSkills from '../Molecules/MoleculesSkills';
import TemplatesMain from '../Templates/TemplatesMain';

export default function PagesHome() {
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
      <main className="px-4 py-6 flex flex-col gap-6">
        <section className="flex flex-col gap-6">
          <AtomsHeader smallText="DESENVOLVEDOR" bigText="FRONT-END" />
          <AtomsParagraph className="text-justify">
            Meu nome é Alan Lima, sou formado em Automação Industrial e Técnico
            em Eletrônica, com uma paixão crescente por desenvolvimento web.
            Atualmente, estou cursando Análise e Desenvolvimento de Sistemas e
            focando em me especializar como Desenvolvedor Front-End. Estou em
            busca de oportunidades para aplicar meus conhecimentos e contribuir
            para projetos inovadores.
          </AtomsParagraph>
          <AtomsPeopleSVG />
        </section>
        <section>
          <MoleculesSkills skills={skills} />
        </section>
      </main>
    </TemplatesMain>
  );
}
