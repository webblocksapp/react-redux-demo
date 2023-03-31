import { Breadcrumbs, Grid, Typography } from '@components';
import { Outlet, useNavigate } from 'react-router-dom';
import React from 'react';

export const Products: React.FC = () => {
  return (
    <Grid container rowSpacing={2}>
      <Grid item xs={12}>
        <Breadcrumbs>
          <Typography>Products</Typography>
        </Breadcrumbs>
      </Grid>
      <Grid item xs={12}>
        <Outlet />
      </Grid>
    </Grid>
  );
};

export * from './ProductForm';
export * from './ProductsTable';
