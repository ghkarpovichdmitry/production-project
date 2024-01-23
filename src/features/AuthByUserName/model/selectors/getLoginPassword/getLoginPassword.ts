import { type StateScheme } from 'app/providers/StoreProvider';

export const getLoginPassword = (state: StateScheme): string => state?.loginForm?.password || '';
