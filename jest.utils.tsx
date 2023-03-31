import React, { useState } from 'react';
import { renderHook as baseRenderHook } from '@testing-library/react';
import { Provider } from 'react-redux';
import { buildStore, store } from '@store';

export const globals = {
  store,
};

export const JestProvider = (props: { children: React.ReactNode }) => {
  const [store] = useState(buildStore());
  globals.store = store;
  return <Provider store={store}>{props.children}</Provider>;
};

export const renderHook: typeof baseRenderHook = (render, options) => {
  return baseRenderHook(render, { ...options, wrapper: JestProvider });
};

export { RenderHookResult } from '@testing-library/react';
