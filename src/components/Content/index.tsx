import React from 'react';
import { Box, BoxProps } from '@components';

export interface ContentProps extends BoxProps {}

export const Content: React.FC<ContentProps> = (props) => {
  return <Box {...props} />;
};

Content.defaultProps = {
  padding: 2,
};
