import React from 'react';
import {
  TablePagination as MuiTablePagination,
  TablePaginationProps as MuiTablePaginationProps,
} from '@mui/material';

export type TablePaginationProps = MuiTablePaginationProps & { component: string };

export const TablePagination: React.FC<TablePaginationProps> = (props) => {
  return <MuiTablePagination {...props} />;
};
