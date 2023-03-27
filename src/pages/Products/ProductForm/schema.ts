import { Product } from '@interfaces';
import * as yup from 'yup';

export const schema: yup.SchemaOf<Product> = yup.object({
  id: yup.mixed().optional(),
  name: yup.string().required().default(''),
  brand: yup.string().required().default(''),
  price: yup.number().required().default(0),
  currency: yup.string().required().default('USD'),
});
