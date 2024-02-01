import { getLoginError } from './getLoginError';
import { type StateSchema } from 'app/providers/StoreProvider';

describe('getLoginError test', function () {
    test('Should return error', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                error: 'some test error'
            }
        };

        expect(getLoginError(state as StateSchema)).toEqual('some test error');
    });

    test('Should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getLoginError(state as StateSchema)).toEqual(undefined);
    });
});
