import { localAxios } from '@utils';
import { EntityParams, Id, Product } from '@interfaces';

export const useProductApiClient = () => {
  const list = async (params?: EntityParams<Product>) => {
    params = { _limit: 10, _page: 0, ...params };
    const { data, headers } = await localAxios.get<Product[]>('/products', {
      params,
    });
    return {
      data,
      pagination: {
        count: Number(headers['x-total-count']),
        limit: params._limit,
        page: params._page,
      },
    };
  };

  const create = async (data: Product) => {
    const response = await localAxios.post<Product>('/products', data);
    return response.data;
  };

  const update = async (id: Id, data: Product) => {
    const response = await localAxios.put<Product>(`/products/${id}`, data);
    return response.data;
  };

  const remove = async (id: Id) => {
    const { data } = await localAxios.delete<Product>(`/products/${id}`);
    return data;
  };

  const read = async (id: Id) => {
    const { data } = await localAxios.get<Product>(`/products/${id}`);
    return data;
  };

  return {
    list,
    create,
    update,
    remove,
    read,
  };
};
