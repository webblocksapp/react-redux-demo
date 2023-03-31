import { useProductApiClient } from '@apiClients';
import { EntityParams, Id, Product, ProductActions, RootState } from '@interfaces';
import { Dispatch } from '@reduxjs/toolkit';
import { handleError } from '@utils';
import { useDispatch } from 'react-redux';

export const useProductModel = () => {
  const dispatch = useDispatch<Dispatch<ProductActions>>();
  const productApiClient = useProductApiClient();

  const list = async (params?: EntityParams<Product>) => {
    try {
      dispatch({ type: 'PRODUCT:ERROR', errors: { listError: '' } });
      dispatch({ type: 'PRODUCT:LISTING', flag: true });
      const { data: products, pagination } = await productApiClient.list(params);
      dispatch({ type: 'PRODUCT:LIST', products, pagination });
    } catch (error) {
      dispatch({ type: 'PRODUCT:ERROR', errors: { listError: handleError(error) } });
    } finally {
      dispatch({ type: 'PRODUCT:LISTING', flag: false });
    }
  };

  const create = async (data: Product) => {
    try {
      dispatch({ type: 'PRODUCT:ERROR', errors: { createError: '' } });
      dispatch({ type: 'PRODUCT:CREATING', flag: true });
      dispatch({ type: 'PRODUCT:CREATE', product: await productApiClient.create(data) });
    } catch (error) {
      dispatch({ type: 'PRODUCT:ERROR', errors: { createError: handleError(error) } });
    } finally {
      dispatch({ type: 'PRODUCT:CREATING', flag: false });
    }
  };

  const update = async (id: Id, data: Product) => {
    try {
      dispatch({ type: 'PRODUCT:ERROR', errors: { updateError: '' } });
      dispatch({ type: 'PRODUCT:UPDATING', flag: true });
      dispatch({ type: 'PRODUCT:UPDATE', id, product: await productApiClient.update(id, data) });
    } catch (error) {
      dispatch({ type: 'PRODUCT:ERROR', errors: { updateError: handleError(error) } });
    } finally {
      dispatch({ type: 'PRODUCT:UPDATING', flag: false });
    }
  };

  const save = (data: Product) => {
    if (data.id === undefined) {
      return create(data);
    } else {
      return update(data.id, data);
    }
  };

  const remove = async (id: Id) => {
    try {
      dispatch({ type: 'PRODUCT:ERROR', errors: { removeError: '' } });
      dispatch({ type: 'PRODUCT:REMOVING', flag: true });
      await productApiClient.remove(id);
      dispatch({ type: 'PRODUCT:REMOVE', id });
    } catch (error) {
      dispatch({ type: 'PRODUCT:ERROR', errors: { removeError: handleError(error) } });
    } finally {
      dispatch({ type: 'PRODUCT:REMOVING', flag: false });
    }
  };

  const read = async (id: Id) => {
    try {
      dispatch({ type: 'PRODUCT:ERROR', errors: { readError: '' } });
      dispatch({ type: 'PRODUCT:READING', flag: true });
      dispatch({ type: 'PRODUCT:READ', product: await productApiClient.read(id) });
    } catch (error) {
      dispatch({ type: 'PRODUCT:ERROR', errors: { readError: handleError(error) } });
    } finally {
      dispatch({ type: 'PRODUCT:READING', flag: false });
    }
  };

  const selectProductState = (state: RootState) => state.productState;
  const selectProduct = (id: Id, state: RootState) =>
    state.productState.products.find((item) => item.id == id);

  return { list, create, update, remove, read, save, selectProductState, selectProduct };
};
