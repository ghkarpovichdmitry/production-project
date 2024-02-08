import { getProfileError } from './getProfileError';
import { type StateSchema } from 'app/providers/StoreProvider';

describe('getProfileError tests', function () {
    test('getProfileError returns error', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                error: 'some test error happen'
            }
        };

        expect(getProfileError(state as StateSchema)).toEqual('some test error happen');
    });

    test('getProfileError works with empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getProfileError(state as StateSchema)).toEqual(undefined);
    });
});
