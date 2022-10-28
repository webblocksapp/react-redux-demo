import React from 'react';
import { TableHead as MuiTableHead, TableHeadProps as MuiTableHeadProps } from '@mui/material';

export interface TableHeadProps extends MuiTableHeadProps {}

export const TableHead: React.FC<TableHeadProps> = (props) => {
  return <MuiTableHead {...props} />;
};
