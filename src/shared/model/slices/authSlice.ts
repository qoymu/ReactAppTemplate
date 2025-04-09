import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { localStorageFields } from '@constants/localStorage';

interface IAuthSlice {
  token?: string;
  isAuthorized: boolean;
}

const initialState: IAuthSlice = {
  token: localStorage.getItem(localStorageFields.token) || undefined,
  isAuthorized: !!localStorage.getItem(localStorageFields.token),
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logIn(state, action: PayloadAction<{ token: string }>) {
      state.token = action.payload.token;
    },

    logOut(state) {
      localStorage.removeItem(localStorageFields.token);
      state.token = '';
      state.isAuthorized = false;
    },
  },
});

export const { logIn, logOut } = authSlice.actions;
export default authSlice.reducer;
