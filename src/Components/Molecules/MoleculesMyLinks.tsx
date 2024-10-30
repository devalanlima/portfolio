import { Link } from 'react-router-dom';
import { LinkIcon } from '../../types/linkIcon';

interface Props {
  links: Array<LinkIcon>;
}

export default function MoleculesMyLinks({ links }: Props) {
  return (
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
  );
}
