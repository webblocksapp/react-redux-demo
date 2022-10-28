import React from 'react';
import { TableCell as MuiTableCell, TableCellProps as MuiTableCellProps } from '@mui/material';

export interface TableCellProps extends MuiTableCellProps {}

export const TableCell: React.FC<TableCellProps> = (props) => {
  return <MuiTableCell {...props} />;
};
