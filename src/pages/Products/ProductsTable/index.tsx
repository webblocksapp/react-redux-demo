import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Alert, DataTable, IconButton } from '@components';
import { useProductModel } from '@models';
import { Product } from '@interfaces';
import { useNavigate } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';

export const ProductsTable: React.FC = () => {
  const productModel = useProductModel();
  const productState = useSelector(productModel.selectProductState);
  const navigate = useNavigate();

  useEffect(() => {
    !productState.pagination.count && productModel.list();
  }, []);

  return (
    <>
      {productState.listError && <Alert severity="error">{productState.listError}</Alert>}
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
                <IconButton onClick={() => navigate(`${row.id}`)}>
                  <EditIcon />
                </IconButton>
              </>
            ),
          },
        ]}
        pagination={productState.pagination}
        onPageChange={(page) => productModel.list({ _page: page })}
        onRowsPerPageChange={(limit) => productModel.list({ _limit: limit, _page: 1 })}
      />
    </>
  );
};
