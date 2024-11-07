import AtomsTitle from '../Atoms/AtomsTitle';
import TemplatesMain from '../Templates/TemplatesMain';
import { projects } from '../../data/projects';
import OrganismsProjectCard from '../Organisms/OrganismsProjectCard';

export default function PagesProjetos() {
  return (
    <TemplatesMain>
      <main className="lg:py-110 flex w-full flex-col gap-6 px-4 py-10">
        <section className="flex flex-col gap-6 lg:gap-14">
          <AtomsTitle smallText="MEUS" bigText="PROJETOS" />
          <ul className="gap-y-110 grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-10">
            {projects.map(project => (
              <li key={project.name}>
                <OrganismsProjectCard project={project} />
              </li>
            ))}
          </ul>
        </section>
      </main>
    </TemplatesMain>
  );
}
