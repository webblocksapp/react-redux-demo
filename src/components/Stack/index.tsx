import { Stack as MuiStack, StackProps as MuiStackProps } from '@mui/material';

export interface StackProps extends MuiStackProps {}

export const Stack: React.FC<StackProps> = (props) => {
  return <MuiStack {...props} />;
};
