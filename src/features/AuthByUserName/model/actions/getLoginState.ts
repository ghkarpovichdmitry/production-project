import { type StateScheme } from 'app/providers/StoreProvider/index';
import { type LoginScheme } from 'features/AuthByUserName/index';

export const getLoginState = (state: StateScheme): LoginScheme => state?.loginForm;
