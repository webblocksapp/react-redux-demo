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
  error,
} from './handlers';

const initialState: ProductState = {
  products: [],
  listing: false,
  creating: false,
  updating: false,
  removing: false,
  error: '',
};

export const productState = (state: ProductState = initialState, action: ProductActions) => {
  switch (action.type) {
    case 'PRODUCT:LIST':
      return list(action.products, state);
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
    default:
      return state;
  }
};
