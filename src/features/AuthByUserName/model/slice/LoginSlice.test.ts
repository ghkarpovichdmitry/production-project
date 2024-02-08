import { loginReducer, loginActions } from './loginSlice';
import { type LoginSchema } from 'features/AuthByUserName';

describe('loginSlice test', function () {
    test('test set username', async () => {
        const state: DeepPartial<LoginSchema> = { username: 'Dzmitry' };

        expect(
            loginReducer(state as LoginSchema,
                loginActions.setUserName('Alex')
            )).toEqual({ username: 'Alex' });
    });

    test('test set password', async () => {
        const state: DeepPartial<LoginSchema> = { password: 'oldPassword' };

        expect(
            loginReducer(state as LoginSchema,
                loginActions.setPassword('newPassword')
            )).toEqual({ password: 'newPassword' });
    });
});
