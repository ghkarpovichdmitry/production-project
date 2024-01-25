import { type DeepPartial } from '@reduxjs/toolkit';
import { loginReducer, loginSlice } from './loginSlice';
import { type LoginSchema } from 'features/AuthByUserName';

describe('loginSlice test', function () {
    test('test set username', async () => {
        const state: DeepPartial<LoginSchema> = { username: 'Dzmitry' };

        expect(
            loginReducer(state as LoginSchema,
                loginSlice.actions.setUserName('Alex')
            )).toEqual({ username: 'Alex' });
    });

    test('test set password', async () => {
        const state: DeepPartial<LoginSchema> = { password: 'oldPassword' };

        expect(
            loginReducer(state as LoginSchema,
                loginSlice.actions.setPassword('newPassword')
            )).toEqual({ password: 'newPassword' });
    });
});
