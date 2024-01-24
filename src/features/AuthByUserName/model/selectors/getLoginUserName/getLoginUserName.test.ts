import { getLoginUserName } from './getLoginUserName';
import { type StateScheme } from 'app/providers/StoreProvider';
import { type DeepPartial } from '@reduxjs/toolkit';

describe('getLoginUserName test', function () {
    test('Should return password', () => {
        const state: DeepPartial<StateScheme> = {
            user: undefined,
            loginForm: {
                username: 'Dzmitry'
            }
        };

        expect(getLoginUserName(state as StateScheme)).toEqual('Dzmitry');
    });

    test('Should work with empty string', () => {
        const state: DeepPartial<StateScheme> = {};

        expect(getLoginUserName(state as StateScheme)).toEqual('');
    });
});
