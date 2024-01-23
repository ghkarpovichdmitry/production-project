import { type StateScheme } from 'app/providers/StoreProvider';
import { type User } from 'entities/User';

export const getUserAuthData = (state: StateScheme): User => state.user.authData;
