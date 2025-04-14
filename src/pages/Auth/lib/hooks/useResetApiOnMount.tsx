import { baseApi } from '@api/base/baseApi';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useEffect } from 'react';

/**
 * Очищает кэш при первом рендере
 */
export const useResetApiOnMount = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(baseApi.util.resetApiState());
  }, []);
};
