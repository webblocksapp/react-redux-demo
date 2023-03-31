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
  const products = [product, ...state.products];
  return {
    ...state,
    products,
    pagination: { ...state.pagination, count: state.pagination.count + 1 },
    createError: '',
  };
};

export const creating = (flag: boolean, state: ProductState): ProductState => {
  return { ...state, creating: flag };
};

export const update = (id: Id, product: Product, state: ProductState): ProductState => {
  const products = state.products.map((item) => {
    if (item.id == id) {
      return { ...item, ...product };
    }

    return item;
  });
  return { ...state, products, updateError: '' };
};

export const updating = (flag: boolean, state: ProductState): ProductState => {
  return { ...state, updating: flag };
};

export const remove = (id: Id, state: ProductState): ProductState => {
  const products = state.products.filter((item) => item.id !== id);
  return {
    ...state,
    products,
    pagination: { ...state.pagination, count: state.pagination.count - 1 },
    removeError: '',
  };
};

export const removing = (flag: boolean, state: ProductState): ProductState => {
  return { ...state, removing: flag };
};

export const read = (product: Product, state: ProductState): ProductState => {
  const products = [...state.products, product];
  return { ...state, products, readError: '' };
};

export const reading = (flag: boolean, state: ProductState): ProductState => {
  return { ...state, reading: flag };
};

export const errors = (
  errors: Partial<{
    createError: string;
    updateError: string;
    removeError: string;
    readError: string;
  }>,
  state: ProductState
): ProductState => {
  return { ...state, ...errors };
};
