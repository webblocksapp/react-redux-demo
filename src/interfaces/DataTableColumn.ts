import React from 'react';

export type DataTableColumn<T = any> = {
  path?: string;
  label: string;
  cellTemplate?: (row: T) => React.ReactElement;
};
