import { Paths } from '@interfaces';

export type NestedObjectPaths<T> = {
  [K in keyof T]: Paths<T[K], `${K & string}`>;
}[keyof T];
