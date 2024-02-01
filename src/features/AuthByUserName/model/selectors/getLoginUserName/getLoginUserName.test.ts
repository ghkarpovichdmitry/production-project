import { getLoginUserName } from './getLoginUserName';
import { type StateSchema } from 'app/providers/StoreProvider';

describe('getLoginUserName test', function () {
    test('Should return username', () => {
        const state: DeepPartial<StateSchema> = {
            user: undefined,
            loginForm: {
                username: 'Dzmitry'
            }
        };

        expect(getLoginUserName(state as StateSchema)).toEqual('Dzmitry');
    });

    test('Should work with empty string', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getLoginUserName(state as StateSchema)).toEqual('');
    });
});
