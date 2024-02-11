import { type StateSchema } from 'app/providers/StoreProvider';

export const getUserIsInited = (state: StateSchema): boolean => state.user._isInited;
