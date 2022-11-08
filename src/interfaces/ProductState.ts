import { Product, Pagination } from '@interfaces';

export type ProductState = {
  products: Product[];
  pagination: Pagination;
  listing: boolean;
  creating: boolean;
  updating: boolean;
  removing: boolean;
  reading: boolean;
};
