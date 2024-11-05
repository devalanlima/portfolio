import { routes } from '../../Routes/routes';
import { Link } from 'react-router-dom';
import TemplatesMain from '../Templates/TemplatesMain';

export default function PagesNotFound() {
  return (
    <TemplatesMain>
      <div className="flex flex-col gap-5 m-3 text-primary transition-colors ease-in-out duration-200">
        <h2 className="text-2xl text-[#FF0000]">Error 404</h2>
        <p>
          A página que você procura não existe, para onde você gostaria de ir?
        </p>
        <ul className="flex gap-4 font-semibold">
          {routes.map(
            route =>
              route.path && (
                <li
                  key={route.path}
                  className="hover:underline underline-offset-2"
                >
                  <Link className="py-1 flex" to={route.path}>
                    {route.id}
                  </Link>
                </li>
              )
          )}
        </ul>
      </div>
    </TemplatesMain>
  );
}
