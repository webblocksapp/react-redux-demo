import { useProductApiClient } from '@apiClients';
import { EntityParams, Id, Product, ProductActions, RootState } from '@interfaces';
import { Dispatch } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

export const useProductModel = () => {
  const dispatch = useDispatch<Dispatch<ProductActions>>();
  const productApiClient = useProductApiClient();

  const list = async (params?: EntityParams<Product>) => {
    try {
      dispatch({ type: 'PRODUCT:LISTING', flag: true });
      const { data: products, pagination } = await productApiClient.list(params);
      dispatch({ type: 'PRODUCT:LIST', products, pagination });
    } finally {
      dispatch({ type: 'PRODUCT:LISTING', flag: false });
    }
  };

  const create = async (data: Product) => {
    try {
      dispatch({ type: 'PRODUCT:CREATING', flag: true });
      dispatch({ type: 'PRODUCT:CREATE', product: await productApiClient.create(data) });
    } finally {
      dispatch({ type: 'PRODUCT:CREATING', flag: false });
    }
  };

  const update = async (id: Id, data: Product) => {
    try {
      dispatch({ type: 'PRODUCT:UPDATING', flag: true });
      dispatch({ type: 'PRODUCT:UPDATE', id, product: await productApiClient.update(id, data) });
    } finally {
      dispatch({ type: 'PRODUCT:UPDATING', flag: false });
    }
  };

  const remove = async (id: Id) => {
    try {
      dispatch({ type: 'PRODUCT:REMOVING', flag: true });
      await productApiClient.remove(id);
      dispatch({ type: 'PRODUCT:REMOVE', id });
    } finally {
      dispatch({ type: 'PRODUCT:REMOVING', flag: false });
    }
  };

  const selectProductState = (state: RootState) => state.productState;

  return { list, create, update, remove, selectProductState };
};
