import AtomsHeader from '../Atoms/AtomsHeader';
import TemplatesMain from '../Templates/TemplatesMain';
import { projects } from '../../data/projects';
import OrganismsProjectCard from '../Organisms/OrganismsProjectCard';

export default function PagesProjetos() {
  return (
    <TemplatesMain>
      <main className="flex flex-col gap-6 px-4 py-6">
        <section className="flex flex-col gap-6">
          <AtomsHeader smallText="MEUS" bigText="PROJETOS" />
          <ul className="flex flex-col gap-6">
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
