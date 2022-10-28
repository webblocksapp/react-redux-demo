import { Product } from '@interfaces';

export type ProductState = {
  products: Product[];
  listing: boolean;
  creating: boolean;
  updating: boolean;
  removing: boolean;
  error: string;
};
