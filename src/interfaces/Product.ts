import { Id } from '@interfaces';

export type Product = {
  id?: Id;
  name: string;
  brand: string;
  price: number;
  currency: string;
};
