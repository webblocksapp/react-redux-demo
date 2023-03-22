import { useMemo } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { AnyObjectSchema, AnySchema } from 'yup';
import { DeepPartial, useForm as useReactHookForm, UseFormReset } from 'react-hook-form';

type Params = Omit<Parameters<typeof useReactHookForm>, 'resolver'>;
type ResetOptions = Parameters<UseFormReset<any>>[1];

export const useForm = <T>(schema: AnySchema<T>, options?: Params) => {
  const defaultValues = useMemo(() => schema.getDefault(), []) as DeepPartial<T>;
  const form = useReactHookForm({
    resolver: yupResolver(schema as AnyObjectSchema),
    defaultValues,
    ...options,
  });

  const reset = (options?: ResetOptions) => {
    form.reset(schema.getDefault(), options);
  };

  const fill = (data: T, options?: ResetOptions) => {
    form.reset(data, options);
  };

  return { ...form, reset, fill };
};
