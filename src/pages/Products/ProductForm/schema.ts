import { Product } from '@interfaces';
import * as yup from 'yup';

export const schema: yup.SchemaOf<Product> = yup.object({
  id: yup.mixed().optional(),
  name: yup.string().required(),
  brand: yup.string().required(),
  price: yup.number().required(),
  currency: yup.string().required(),
});
