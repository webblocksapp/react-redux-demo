import { configureStore } from '@reduxjs/toolkit';
import { rootState } from '@states';

export const buildStore = () =>
  configureStore({
    reducer: rootState,
  });

export const store = buildStore();
