import { getLoginIsLoading } from './getLoginIsLoading';
import { type StateScheme } from 'app/providers/StoreProvider';
import { type DeepPartial } from '@reduxjs/toolkit';

describe('getLoginIsLoading test', function () {
    test('Should return true', () => {
        const state: DeepPartial<StateScheme> = {
            loginForm: {
                isLoading: true
            }
        };

        expect(getLoginIsLoading(state as StateScheme)).toEqual(true);
    });

    test('Should return false', () => {
        const state: DeepPartial<StateScheme> = {
            loginForm: {
                isLoading: false
            }
        };

        expect(getLoginIsLoading(state as StateScheme)).toEqual(false);
    });

    test('Should work with empty state', () => {
        const state: DeepPartial<StateScheme> = {};

        expect(getLoginIsLoading(state as StateScheme)).toEqual(false);
    });
});
