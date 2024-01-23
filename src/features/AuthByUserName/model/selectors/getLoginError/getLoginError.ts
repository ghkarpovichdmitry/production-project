import { type StateScheme } from 'app/providers/StoreProvider';

export const getLoginError = (state: StateScheme): string => state?.loginForm?.error;
