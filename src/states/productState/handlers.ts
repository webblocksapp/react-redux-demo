import { Id, Pagination, Product, ProductState } from '@interfaces';

export const list = (
  products: Product[],
  pagination: Pagination,
  state: ProductState
): ProductState => {
  return { ...state, products, pagination };
};

export const listing = (flag: boolean, state: ProductState): ProductState => {
  return { ...state, listing: flag };
};

export const create = (product: Product, state: ProductState): ProductState => {
  const products = [...state.products, product];
  return { ...state, products };
};

export const creating = (flag: boolean, state: ProductState): ProductState => {
  return { ...state, creating: flag };
};

export const update = (id: Id, product: Product, state: ProductState): ProductState => {
  const products = state.products.map((item) => {
    if (item.id === id) {
      return { ...item, ...product };
    }

    return item;
  });
  return { ...state, products };
};

export const updating = (flag: boolean, state: ProductState): ProductState => {
  return { ...state, updating: flag };
};

export const remove = (id: Id, state: ProductState): ProductState => {
  const products = state.products.filter((item) => item.id !== id);
  return { ...state, products };
};

export const removing = (flag: boolean, state: ProductState): ProductState => {
  return { ...state, removing: flag };
};

export const read = (product: Product, state: ProductState): ProductState => {
  const products = [...state.products, product];
  return { ...state, products };
};

export const reading = (flag: boolean, state: ProductState): ProductState => {
  return { ...state, reading: flag };
};
