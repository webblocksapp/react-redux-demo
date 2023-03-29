import { ENV } from '@constants';
import { paginateData } from '@utils';
import { rest } from 'msw';
import { data } from '../data';

export const productHandler = [
  // List
  rest.get(`${ENV.baseURL}/products`, (req, res, ctx) => {
    const limit: any = req.url.searchParams.get('_limit');
    const page: any = req.url.searchParams.get('_page');

    return res(
      ctx.set('x-total-count', String(data.products.length)),
      ctx.status(200),
      ctx.json(paginateData(data.products, { limit, page }))
    );
  }),
  // Create
  rest.post(`${ENV.baseURL}/products`, async (req, res, ctx) => {
    const body = await req.json();
    data.products.push(body);
    return res(ctx.status(200), ctx.json(data.products));
  }),
  // Read
  rest.get(`${ENV.baseURL}/products/:id`, (req, res, ctx) => {
    const { id } = req.params;
    return res(ctx.status(200), ctx.json(data.products.find((item) => item.id == id)));
  }),
  // Update
  rest.put(`${ENV.baseURL}/products/:id`, async (req, res, ctx) => {
    const { id } = req.params;
    const body = await req.json();

    data.products = data.products = data.products.map((item) => {
      if (item.id == id) return body;
      return item;
    });

    return res(ctx.status(200), ctx.json(body));
  }),
  // Remove
  rest.delete(`${ENV.baseURL}/products/:id`, async (req, res, ctx) => {
    const { id } = req.params;
    data.products = data.products = data.products.filter((item) => item.id !== id);
    return res(ctx.status(200), ctx.json(null));
  }),
];
