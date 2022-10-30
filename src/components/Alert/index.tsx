import React from 'react';
import { Alert as MuiAlert, AlertProps as MuiAlertProps } from '@mui/material';

export interface AlertProps extends MuiAlertProps {}

export const Alert: React.FC<AlertProps> = (props) => {
  return <MuiAlert {...props} />;
};
