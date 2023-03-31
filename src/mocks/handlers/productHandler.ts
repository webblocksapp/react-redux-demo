import { ENV } from '@constants';
import { paginateData } from '@utils';
import { rest } from 'msw';
import { data } from '../data';
import { v4 as uuid } from 'uuid';

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
    let body = { id: uuid(), ...(await req.json()) };
    return res(ctx.status(200), ctx.json(body));
  }),
  // Read
  rest.get(`${ENV.baseURL}/products/:id`, (req, res, ctx) => {
    const { id } = req.params;
    return res(ctx.status(200), ctx.json(data.products.find((item) => item.id == id)));
  }),
  // Update
  rest.put(`${ENV.baseURL}/products/:id`, async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(await req.json()));
  }),
  // Remove
  rest.delete(`${ENV.baseURL}/products/:id`, async (req, res, ctx) => {
    const { id } = req.params;
    return res(ctx.status(200), ctx.json(data.products.find((item) => item.id == id)));
  }),
];
