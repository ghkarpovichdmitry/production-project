import { getLoginPassword } from './getLoginPassword';
import { type StateScheme } from 'app/providers/StoreProvider';
import { type DeepPartial } from '@reduxjs/toolkit';

describe('getLoginPassword test', function () {
    test('Should return password', () => {
        const state: DeepPartial<StateScheme> = {
            loginForm: {
                password: '12345678'
            }
        };

        expect(getLoginPassword(state as StateScheme)).toEqual('12345678');
    });

    test('Should work with empty string', () => {
        const state: DeepPartial<StateScheme> = {};

        expect(getLoginPassword(state as StateScheme)).toEqual('');
    });
});
