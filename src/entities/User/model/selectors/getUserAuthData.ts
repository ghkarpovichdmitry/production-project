import { type StateScheme } from 'app/providers/StoreProvider/index';
import { type User } from 'entities/User/index';

export const getUserAuthData = (state: StateScheme): User => state.user.authData;
