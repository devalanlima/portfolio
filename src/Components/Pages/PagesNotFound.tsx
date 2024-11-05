import { routes } from '../../Routes/routes';
import { Link } from 'react-router-dom';
import TemplatesMain from '../Templates/TemplatesMain';

export default function PagesNotFound() {
  return (
    <TemplatesMain>
      <div className="m-3 flex flex-col gap-5 text-primary transition-colors duration-200 ease-in-out">
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
                  className="underline-offset-2 hover:underline"
                >
                  <Link className="flex py-1" to={route.path}>
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
