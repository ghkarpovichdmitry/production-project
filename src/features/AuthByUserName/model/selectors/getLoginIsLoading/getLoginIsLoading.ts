import { type StateScheme } from 'app/providers/StoreProvider';

export const getLoginIsLoading = (state: StateScheme): boolean => state?.loginForm?.isLoading || false;
