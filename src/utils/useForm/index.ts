import { useEffect, useRef } from 'react';
import { useForm as useReactHookForm } from 'react-hook-form';

export const useForm: typeof useReactHookForm = (props) => {
  const form = useReactHookForm(props);
  const store = useRef({ resetting: false });

  const reset: typeof form.reset = (values, keepStateOptions) => {
    form.reset(values, keepStateOptions);
    store.current.resetting = false;
  };

  useEffect(() => {
    if (store.current.resetting === true) return;
    store.current.resetting = true;
  }, [props.defaultValues]);

  useEffect(() => {
    reset(props.defaultValues);
  }, [store.current.resetting]);

  return { ...form, reset };
};
