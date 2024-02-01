import { getLoginPassword } from './getLoginPassword';
import { type StateSchema } from 'app/providers/StoreProvider';

describe('getLoginPassword test', function () {
    test('Should return password', () => {
        const state: DeepPartial<StateSchema> = {
            user: undefined,
            loginForm: {
                password: '12345678'
            }
        };

        expect(getLoginPassword(state as StateSchema)).toEqual('12345678');
    });

    test('Should work with empty string', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getLoginPassword(state as StateSchema)).toEqual('');
    });
});
