import { Error404, ProductForm, Products, ProductsTable } from '@pages';
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
        children: [
          {
            index: true,
            element: <ProductsTable />,
          },
          {
            path: 'update/:id',
            element: <ProductForm />,
          },
          {
            path: 'create',
            element: <ProductForm />,
          },
        ],
      },
      {
        path: '404',
        element: <Error404 />,
      },
    ],
  },
];
