import { getLoginError } from './getLoginError';
import { type StateScheme } from 'app/providers/StoreProvider';
import { type DeepPartial } from '@reduxjs/toolkit';

describe('getLoginError test', function () {
    test('Should return error', () => {
        const state: DeepPartial<StateScheme> = {
            loginForm: {
                error: 'some test error'
            }
        };

        expect(getLoginError(state as StateScheme)).toEqual('some test error');
    });

    test('Should work with empty state', () => {
        const state: DeepPartial<StateScheme> = {};

        expect(getLoginError(state as StateScheme)).toEqual(undefined);
    });
});
