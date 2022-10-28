import { Products } from '@pages';
import { RouteObject } from 'react-router-dom';
import { MainLayout } from 'src/layouts/MainLayout';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Products />,
      },
      {
        path: 'products',
        element: <Products />,
      },
    ],
  },
];
