import { Link } from 'react-router-dom';
import IconsFilePDF from '../Icons/IconsFilePDF';
import IconsGithub from '../Icons/IconsGithub';
import IconsLinkedin from '../Icons/IconsLinkedin';
import IconsWhatsapp from '../Icons/IconsWhatsapp';

export default function OrganismsFooter() {
  const links = [
    {
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/devalanlima/',
      icon: IconsLinkedin,
    },
    {
      name: 'whatsapp',
      url: 'https://wa.me/55021996058924',
      icon: IconsWhatsapp,
    },
    {
      name: 'github',
      url: 'https://github.com/devalanlima',
      icon: IconsGithub,
    },
    {
      name: 'curriculo',
      url: '/Alan-Lima-Curriculo.pdf',
      icon: IconsFilePDF,
    },
  ];

  return (
    <footer className="w-full outline outline-2 outline-primary flex justify-center items-center p-3">
      <nav>
        <ul className="flex gap-4">
          {links.map(link => {
            return (
              <li key={link.name}>
                <Link
                  to={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={link.name}
                >
                  {<link.icon className="w-[30px] h-[30px]" />}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </footer>
  );
}
