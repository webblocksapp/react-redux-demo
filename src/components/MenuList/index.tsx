import React from 'react';
import { MenuList as MuiMenuList, MenuListProps as MuiMenuListProps } from '@mui/material';

export interface MenuListProps extends MuiMenuListProps {}

export const MenuList: React.FC<MenuListProps> = (props) => {
  return <MuiMenuList {...props} />;
};
