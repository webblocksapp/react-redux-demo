import { NestedObjectPaths } from '@interfaces';

export type EntityParams<T = any> = { _page?: number; _limit?: number } & Partial<
  Record<NestedObjectPaths<T>, any>
>;
