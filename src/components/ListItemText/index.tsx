import React from 'react';
import {
  ListItemText as MuiListItemText,
  ListItemTextProps as MuiListItemTextProps,
} from '@mui/material';

export interface ListItemTextProps extends MuiListItemTextProps {}

export const ListItemText: React.FC<ListItemTextProps> = (props) => {
  return <MuiListItemText {...props} />;
};
