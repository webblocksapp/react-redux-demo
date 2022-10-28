import { localAxios } from '@utils';
import { Id, Product } from '@interfaces';

export const useProductApiClient = () => {
  const list = async () => {
    const response = await localAxios.get<Product[]>('/products?_limit=10&_page=1');
    console.log(response.headers);
    return response.data;
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

  return {
    list,
    create,
    update,
    remove,
  };
};
