import { getLoginIsLoading } from './getLoginIsLoading';
import { type StateSchema } from 'app/providers/StoreProvider';
import { type DeepPartial } from '@reduxjs/toolkit';

describe('getLoginIsLoading test', function () {
    test('Should return true', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                isLoading: true
            }
        };

        expect(getLoginIsLoading(state as StateSchema)).toEqual(true);
    });

    test('Should return false', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                isLoading: false
            }
        };

        expect(getLoginIsLoading(state as StateSchema)).toEqual(false);
    });

    test('Should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getLoginIsLoading(state as StateSchema)).toEqual(false);
    });
});
