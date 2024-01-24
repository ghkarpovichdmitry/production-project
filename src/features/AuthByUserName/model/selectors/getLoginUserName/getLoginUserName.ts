import { type StateScheme } from 'app/providers/StoreProvider';

export const getLoginUserName = (state: StateScheme): string => state?.loginForm?.username || '';
