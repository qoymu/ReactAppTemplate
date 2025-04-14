import { UserApiResponse } from '@type/userTypes';
import { baseApi } from './base/baseApi';

const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getUser: build.query<UserApiResponse, void>({
      query: () => `${import.meta.env.VITE_BASE_URL}/users/auth/users/me/`,
    }),
  }),
});

export const { useGetUserQuery } = userApi;
