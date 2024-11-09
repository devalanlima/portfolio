import AtomsCard from '../Atoms/AtomsCard';
import AtomsAccessLink from '../Atoms/AtomsAccessLink';
import { Project } from '../../types/project';
import AtomsParagraph from '../Atoms/AtomsParagraph';
import { useState } from 'react';
import MoleculesSkills from '../Molecules/MoleculesSkills';

interface Props {
  project: Project;
}

export default function OrganismsProjectCard({ project }: Props) {
  const [isParagraphOpen, setIsParagraphOpen] = useState(false);

  const toggleParagraphView = () => {
    setIsParagraphOpen(prevState => !prevState);
  };

  const ProjectHeader = () => (
    <header className="flex w-full items-center justify-between">
      <h3 className="font-DelaGothicOne text-xl">{project.name}</h3>
      <AtomsAccessLink url={project.url} text="Acesse" />
    </header>
  );

  const ProjectDescription = () => (
    <div className="max-h-[300px] overflow-y-auto px-2 text-justify md:px-5">
      {project.description.length >= 150 ? (
        <AtomsParagraph>
          {!isParagraphOpen
            ? project.description.substring(0, 150) + '... '
            : project.description + ' '}
          <button
            aria-label={
              isParagraphOpen ? 'Ver menos descrição' : 'Ver mais descrição'
            }
            className="font-bold"
            onClick={toggleParagraphView}
          >
            {isParagraphOpen ? 'ver menos' : 'ver mais'}
          </button>
        </AtomsParagraph>
      ) : (
        <AtomsParagraph>{project.description}</AtomsParagraph>
      )}
    </div>
  );

  return (
    <AtomsCard className="flex flex-col gap-3">
      <article
        className={`flex flex-col items-center justify-between gap-3 px-3 text-primary ${isParagraphOpen ? 'max-h-[800px]' : 'max-h-[460px]'}`}
      >
        <ProjectHeader />
        <img src={project.image} alt={`${project.name} project screenshot`} />
        <MoleculesSkills skills={project.skills} color={true} />
        <ProjectDescription />
      </article>
    </AtomsCard>
  );
}
