import { AxiosError } from 'axios';

export const handleError = (error: any) => {
  if (error instanceof AxiosError) {
    return error.message;
  } else if (error instanceof Error) {
    return error.message;
  } else {
    return 'An unknown error ocurred.';
  }
};
