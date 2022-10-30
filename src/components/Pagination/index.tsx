import React from 'react';
import { Pagination as MuiPagination, PaginationProps as MuiPaginationProps } from '@mui/material';

export interface PaginationProps extends MuiPaginationProps {}

export const Pagination: React.FC<PaginationProps> = (props) => {
  return <MuiPagination {...props} />;
};
