import React from 'react';
import { ProductForm } from './ProductForm';
import { ProductsTable } from './ProductsTable';

export const Products: React.FC = () => {
  return (
    <>
      <ProductForm />
      <ProductsTable />
    </>
  );
};
