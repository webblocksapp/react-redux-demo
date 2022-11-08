import React, { useEffect } from 'react';
import {
  Box,
  TablePagination,
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  TablePaginationProps,
} from '@components';
import { Pagination, DataTableColumn } from '@interfaces';

export interface DataTableProps {
  columns: Array<DataTableColumn>;
  data: Array<any>;
  pagination: Pagination;
  loading?: boolean;
  onPageChange?: (page: number) => void;
  onRowsPerPageChange?: (limit: number) => void;
}

export const DataTable: React.FC<DataTableProps> = ({
  columns,
  data,
  loading,
  pagination,
  ...rest
}) => {
  const renderRow = (row: any) => {
    return (
      <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
        {columns.map((column, index) => {
          if (column.cellTemplate) {
            return <TableCell key={index}>{column.cellTemplate(row)}</TableCell>;
          } else {
            return <TableCell key={index}>{row[column.path]}</TableCell>;
          }
        })}
      </TableRow>
    );
  };

  const onPageChange: TablePaginationProps['onPageChange'] = (_, page) => {
    rest?.onPageChange?.(page + 1);
  };

  const onRowsPerPageChange: TablePaginationProps['onRowsPerPageChange'] = (e) => {
    rest?.onRowsPerPageChange?.(Number(e.target.value));
  };

  return (
    <>
      <Table style={{ opacity: loading && 0.4 }}>
        <TableHead>
          <TableRow>
            {columns.map((column, index) => (
              <TableCell key={index}>{column.label}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>{data.map(renderRow)}</TableBody>
      </Table>
      {pagination.count ? (
        <Box display="flex" justifyContent="center" mt={2}>
          <TablePagination
            component="div"
            count={pagination.count}
            page={pagination.page - 1}
            rowsPerPage={pagination.limit}
            onPageChange={onPageChange}
            onRowsPerPageChange={onRowsPerPageChange}
          />
        </Box>
      ) : (
        <></>
      )}
    </>
  );
};
DataTable.defaultProps = {
  pagination: { count: 0, limit: 0, page: 0 },
};
