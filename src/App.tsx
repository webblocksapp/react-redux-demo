import React from 'react';
import { useRoutes } from 'react-router-dom';
import { routes } from '@routes';

export const App: React.FC = () => {
  return useRoutes(routes);
};
