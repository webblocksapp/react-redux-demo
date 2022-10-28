import React from 'react';
import { Toolbar as MuiToolbar, ToolbarProps as MuiToolbarProps } from '@mui/material';

export interface ToolbarProps extends MuiToolbarProps {}

export const Toolbar: React.FC<ToolbarProps> = (props) => {
  return <MuiToolbar {...props} />;
};
