import { Pagination, Product, Id } from '@interfaces';

export type ProductActions =
  | { type: 'PRODUCT:LIST'; products: Product[]; pagination: Pagination }
  | { type: 'PRODUCT:LISTING'; flag: boolean }
  | { type: 'PRODUCT:CREATE'; product: Product }
  | { type: 'PRODUCT:CREATING'; flag: boolean }
  | { type: 'PRODUCT:UPDATE'; id: Id; product: Product }
  | { type: 'PRODUCT:UPDATING'; flag: boolean }
  | { type: 'PRODUCT:REMOVE'; id: Id }
  | { type: 'PRODUCT:REMOVING'; flag: boolean };
