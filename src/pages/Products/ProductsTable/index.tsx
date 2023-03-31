import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Alert, Button, DataTable, Grid, IconButton, Stack } from '@components';
import { useProductModel } from '@models';
import { Product } from '@interfaces';
import { useNavigate } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export const ProductsTable: React.FC = () => {
  const productModel = useProductModel();
  const productState = useSelector(productModel.selectProductState);
  const navigate = useNavigate();

  useEffect(() => {
    !productState.pagination.count && productModel.list();
  }, []);

  return (
    <Grid container>
      <Grid item xs={12}>
        <Stack direction="row" justifyContent="flex-end">
          <Button variant="contained" color="primary" onClick={() => navigate('create')}>
            Create
          </Button>
        </Stack>
      </Grid>
      {productState.listError && (
        <Grid item>
          <Alert severity="error">{productState.listError}</Alert>
        </Grid>
      )}
      <Grid item xs={12}>
        <DataTable
          loading={productState.listing}
          data={productState.products}
          columns={[
            { path: 'id', label: 'Id' },
            { path: 'name', label: 'Name' },
            { path: 'price', label: 'Price' },
            { path: 'currency', label: 'Currency' },
            {
              label: 'Actions',
              cellTemplate: (row: Product) => (
                <>
                  <IconButton onClick={() => navigate(`update/${row.id}`)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => productModel.remove(row.id)}>
                    <DeleteIcon />
                  </IconButton>
                </>
              ),
            },
          ]}
          pagination={productState.pagination}
          onPageChange={(page) => productModel.list({ _page: page })}
          onRowsPerPageChange={(limit) => productModel.list({ _limit: limit, _page: 1 })}
        />
      </Grid>
    </Grid>
  );
};
