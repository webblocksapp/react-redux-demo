import React, { useEffect } from 'react';
import { Table, TableHead, TableCell, TableRow, TableBody } from '@components';
import { useProductModel } from '@models';
import { useSelector } from 'react-redux';

export const ProductsTable: React.FC = () => {
  const productModel = useProductModel();
  const products = useSelector(productModel.selectProducts);

  const listProducts = async () => {
    try {
      await productModel.list();
    } catch (error) {}
  };

  useEffect(() => {
    listProducts();
  }, []);

  return (
    <Table>
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
        {products.map((product) => (
          <TableRow key={product.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
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
  );
};
