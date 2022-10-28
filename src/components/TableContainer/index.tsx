import React from 'react';
import {
  TableContainer as MuiTableContainer,
  TableContainerProps as MuiTableContainerProps,
} from '@mui/material';

export interface TableContainerProps extends MuiTableContainerProps {}

export const TableContainer: React.FC<TableContainerProps> = (props) => {
  return <MuiTableContainer {...props} />;
};
