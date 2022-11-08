import React from 'react';
import { Outlet } from 'react-router-dom';

export const Products: React.FC = () => {
  return <Outlet />;
};

export * from './ProductForm';
export * from './ProductsTable';
