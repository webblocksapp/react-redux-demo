import React from 'react';
import {
  Breadcrumbs as MuiBreadcrumbs,
  BreadcrumbsProps as MuiBreadcrumbsProps,
} from '@mui/material';

export interface BreadcrumbsProps extends MuiBreadcrumbsProps {}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = (props) => {
  return <MuiBreadcrumbs {...props} />;
};
