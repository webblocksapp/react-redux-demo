import React from 'react';
import { Box, BoxProps } from '@components';

export interface SidebarProps extends BoxProps {}

export const Sidebar: React.FC<SidebarProps> = (props) => {
  return <Box {...props} />;
};
Sidebar.defaultProps = {
  boxShadow: 1,
};
