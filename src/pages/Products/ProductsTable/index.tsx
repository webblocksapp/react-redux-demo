import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Alert, DataTable, IconButton } from '@components';
import { useProductModel } from '@models';
import { EntityParams, Product } from '@interfaces';
import { useNavigate } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';

export const ProductsTable: React.FC = () => {
  const productModel = useProductModel();
  const productState = useSelector(productModel.selectProductState);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');

  const listProducts = async (params?: EntityParams<Product>) => {
    if (productState.listing) return;

    try {
      await productModel.list({
        _limit: productState.pagination.limit,
        _page: productState.pagination.page,
        ...params,
      });
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      }
    }
  };

  useEffect(() => {
    !productState.pagination.count && listProducts();
  }, []);

  return (
    <>
      {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
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
        onPageChange={(page) => listProducts({ _page: page })}
        onRowsPerPageChange={(limit) => listProducts({ _limit: limit, _page: 1 })}
      />
    </>
  );
};
