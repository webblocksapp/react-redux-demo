import React from 'react';
import { Box, Content, Header, Sidebar, SidebarMenu, Typography } from '@components';
import { Outlet } from 'react-router-dom';
import { MAIN_SIDEBAR_MENU } from '@constants';

export const MainLayout: React.FC = () => {
  return (
    <Box display="grid" gridTemplateRows="auto 1fr">
      <Header brand={<Typography>Admin</Typography>} />
      <Box display="grid" gridTemplateColumns="250px 1fr">
        <Sidebar>
          <SidebarMenu items={MAIN_SIDEBAR_MENU} />
        </Sidebar>
        <Content>
          <Outlet />
        </Content>
      </Box>
    </Box>
  );
};
