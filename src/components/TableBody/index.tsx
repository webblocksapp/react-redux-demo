import React from 'react';
import { TableBody as MuiTableBody, TableBodyProps as MuiTableBodyProps } from '@mui/material';

export interface TableBodyProps extends MuiTableBodyProps {}

export const TableBody: React.FC<TableBodyProps> = (props) => {
  return <MuiTableBody {...props} />;
};
