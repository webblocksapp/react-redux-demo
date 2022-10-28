import React from 'react';
import { TableRow as MuiTableRow, TableRowProps as MuiTableRowProps } from '@mui/material';

export interface TableRowProps extends MuiTableRowProps {}

export const TableRow: React.FC<TableRowProps> = (props) => {
  return <MuiTableRow {...props} />;
};
