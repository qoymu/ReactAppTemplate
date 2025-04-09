import { baseApi } from '@api/base/baseApi';
import { combineReducers } from '@reduxjs/toolkit';
import { authSlice } from '@slices/authSlice';

export const AppReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  [authSlice.reducerPath]: authSlice.reducer,
});

export type AppReducerType = ReturnType<typeof AppReducer>;
