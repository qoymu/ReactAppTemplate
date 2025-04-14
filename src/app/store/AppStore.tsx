import { Action, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { AppReducer, AppReducerType } from './AppReducer';
import { baseApi } from '@api/base/baseApi';

export function makeStore() {
  const rootReducer = (state: AppReducerType | undefined, action: Action) => {
    // Обнуляем стор при логауте
    if (action.type === 'auth/logOut') {
      return AppReducer(undefined, action);
    }

    return AppReducer(state, action);
  };

  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(baseApi.middleware),
  });

  setupListeners(store.dispatch);

  return store;
}

export const appStore = makeStore();

export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;
