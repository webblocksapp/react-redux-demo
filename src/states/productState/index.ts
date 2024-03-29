import { ProductActions, ProductState } from '@interfaces';
import {
  list,
  listing,
  create,
  creating,
  update,
  updating,
  remove,
  removing,
  read,
  reading,
  errors,
} from './handlers';

const initialState: ProductState = {
  products: [],
  pagination: { count: 0, limit: 10, page: 1 },
  listing: false,
  creating: false,
  updating: false,
  removing: false,
  reading: false,
  listError: '',
  createError: '',
  updateError: '',
  removeError: '',
  readError: '',
};

export const productState = (state: ProductState = initialState, action: ProductActions) => {
  switch (action.type) {
    case 'PRODUCT:LIST':
      return list(action.products, action.pagination, state);
    case 'PRODUCT:LISTING':
      return listing(action.flag, state);
    case 'PRODUCT:CREATE':
      return create(action.product, state);
    case 'PRODUCT:CREATING':
      return creating(action.flag, state);
    case 'PRODUCT:UPDATE':
      return update(action.id, action.product, state);
    case 'PRODUCT:UPDATING':
      return updating(action.flag, state);
    case 'PRODUCT:REMOVE':
      return remove(action.id, state);
    case 'PRODUCT:REMOVING':
      return removing(action.flag, state);
    case 'PRODUCT:READ':
      return read(action.product, state);
    case 'PRODUCT:READING':
      return reading(action.flag, state);
    case 'PRODUCT:ERROR':
      return errors(action.errors, state);
    default:
      return state;
  }
};
