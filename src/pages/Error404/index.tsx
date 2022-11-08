import React from 'react';
import { Box, Typography } from '@mui/material';

export const Error404: React.FC = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      height="100%"
    >
      <Typography variant="h1">404</Typography>
      <Typography variant="h4">Not Found</Typography>
    </Box>
  );
};
