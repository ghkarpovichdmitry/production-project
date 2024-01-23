import { getLoginUsername } from './getLoginUsername';
import { type StateScheme } from 'app/providers/StoreProvider';
import { type DeepPartial } from '@reduxjs/toolkit';

describe('getLoginUsername test', function () {
    test('Should return password', () => {
        const state: DeepPartial<StateScheme> = {
            loginForm: {
                username: 'Dzmitry'
            }
        };

        expect(getLoginUsername(state as StateScheme)).toEqual('Dzmitry');
    });

    test('Should work with empty string', () => {
        const state: DeepPartial<StateScheme> = {};

        expect(getLoginUsername(state as StateScheme)).toEqual('');
    });
});
