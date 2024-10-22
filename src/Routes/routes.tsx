import { RouteObject } from 'react-router-dom';
import PagesContatos from '../Components/Pages/PagesContatos';
import PagesHome from '../Components/Pages/PagesHome';
import PagesNotFound from '../Components/Pages/PagesNotFound';
import PagesProjetos from '../Components/Pages/PagesProjetos';

export const routes: Array<RouteObject> = [
  {
    id: 'Home',
    path: '/',
    element: <PagesHome />,
    errorElement: <PagesNotFound />,
  },
  {
    id: 'Contatos',
    path: '/contatos',
    element: <PagesContatos />,
  },
  {
    id: 'Projetos',
    path: '/projetos',
    element: <PagesProjetos />,
  },
];
