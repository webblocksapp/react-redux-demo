import React from 'react';
import { AppBar, Box, Toolbar } from '@components';

export interface HeaderProps {
  brand?: React.ReactElement;
}

export const Header: React.FC<HeaderProps> = ({ brand }) => {
  return (
    <Box>
      <AppBar position="sticky">
        <Toolbar>{brand}</Toolbar>
      </AppBar>
    </Box>
  );
};
