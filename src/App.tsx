import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PagesHome from './Components/Pages/PagesHome';
import PagesContatos from './Components/Pages/PagesContatos';
import PagesProjetos from './Components/Pages/PagesProjetos';

const router = createBrowserRouter([
  {
    path: '/',
    element: <PagesHome />,
    errorElement: <PagesHome />,
  },
  {
    path: '/contatos',
    element: <PagesContatos />,
  },
  {
    path: '/projetos',
    element: <PagesProjetos />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
