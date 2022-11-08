import { Grid as MuiGrid, GridProps as MuiGridProps } from '@mui/material';

export interface GridProps extends MuiGridProps {}

export const Grid: React.FC<GridProps> = (props) => {
  return <MuiGrid {...props} />;
};
