import { RouteObject } from 'react-router-dom';
import PagesContatos from '../Components/Pages/PagesContatos';
import PagesHome from '../Components/Pages/PagesHome';
import PagesNotFound from '../Components/Pages/PagesNotFound';
import PagesProjetos from '../Components/Pages/PagesProjetos';

export const routes: Array<RouteObject> = [
  {
    id: 'Home',
    path: '/portfolio',
    element: <PagesHome />,
    errorElement: <PagesNotFound />,
  },
  {
    id: 'Projetos',
    path: '/projetos',
    element: <PagesProjetos />,
  },
  {
    id: 'Contatos',
    path: '/contatos',
    element: <PagesContatos />,
  },
];
