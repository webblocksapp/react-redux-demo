import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Alert,
  Box,
  TablePagination,
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
} from '@components';
import { useProductModel } from '@models';
import { EntityParams, Product } from '@interfaces';

export const ProductsTable: React.FC = () => {
  const productModel = useProductModel();
  const productState = useSelector(productModel.selectProductState);
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
    listProducts();
  }, []);

  return (
    <>
      {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
      <Table style={{ opacity: productState.listing && 0.4 }}>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell align="right">Brand</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Currency</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {productState.products.map((product) => (
            <TableRow key={product.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell>{product.id}</TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell align="right">{product.brand}</TableCell>
              <TableCell align="right">{product.price}</TableCell>
              <TableCell align="right">{product.currency}</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {productState.pagination.count ? (
        <Box display="flex" justifyContent="center" mt={2}>
          <TablePagination
            component="div"
            count={productState.pagination.count}
            page={productState.pagination.page - 1}
            rowsPerPage={productState.pagination.limit}
            onPageChange={(_, page) => {
              listProducts({ _page: page + 1 });
            }}
            onRowsPerPageChange={(e) => {
              listProducts({ _limit: Number(e.target.value), _page: 1 });
            }}
          />
        </Box>
      ) : (
        <></>
      )}
    </>
  );
};
