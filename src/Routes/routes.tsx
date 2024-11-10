import { RouteObject } from 'react-router-dom';
import PagesContatos from '../Components/Pages/PagesContatos';
import PagesHome from '../Components/Pages/PagesHome';
import PagesNotFound from '../Components/Pages/PagesNotFound';
import PagesProjetos from '../Components/Pages/PagesProjetos';

export const routes: Array<RouteObject> = [
  {
    id: 'Home',
    path: '/portfolio/',
    element: <PagesHome />,
  },
  {
    id: 'Projetos',
    path: '/portfolio/projetos',
    element: <PagesProjetos />,
  },
  {
    id: 'Contatos',
    path: '/portfolio/contatos',
    element: <PagesContatos />,
  },
  {
    path: '*',
    element: <PagesNotFound />,
  },
];
