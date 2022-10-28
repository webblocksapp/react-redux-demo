import { combineReducers as combineStates } from '@reduxjs/toolkit';
import { productState } from '@states';

export const rootState = combineStates({ productState });
