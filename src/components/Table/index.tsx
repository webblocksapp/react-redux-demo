import React from 'react';
import { Table as MuiTable, TableProps as MuiTableProps } from '@mui/material';

export interface TableProps extends MuiTableProps {}

export const Table: React.FC<TableProps> = (props) => {
  return <MuiTable {...props} />;
};
