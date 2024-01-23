import { type StateScheme } from 'app/providers/StoreProvider';

export const getLoginUsername = (state: StateScheme): string => state?.loginForm?.username || '';
