import { type DeepPartial } from '@reduxjs/toolkit';
import { loginReducer, loginSlice } from './loginSlice';
import { type LoginScheme } from 'features/AuthByUserName';

describe('loginSlice test', function () {
    test('test set username', async () => {
        const state: DeepPartial<LoginScheme> = { username: 'Dzmitry' };

        expect(
            loginReducer(state as LoginScheme,
                loginSlice.actions.setUserName('Alex')
            )).toEqual({ username: 'Alex' });
    });

    test('test set password', async () => {
        const state: DeepPartial<LoginScheme> = { password: 'oldPassword' };

        expect(
            loginReducer(state as LoginScheme,
                loginSlice.actions.setPassword('newPassword')
            )).toEqual({ password: 'newPassword' });
    });
});
