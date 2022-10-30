import { BrowserNativeObject, Primitive, NestedObjectPaths } from '@interfaces';

export type Paths<T, K extends string | number> = T extends Primitive | BrowserNativeObject
  ? K
  : K | `${K extends '' ? '' : `${K}.`}${NestedObjectPaths<T>}`;
