import { getProfileIsLoading } from './getProfileIsLoading';
import { type StateSchema } from 'app/providers/StoreProvider';

describe('getProfileIsLoading tests', function () {
    test('getProfileIsLoading returns true when is loading', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                isLoading: true
            }
        };

        expect(getProfileIsLoading(state as StateSchema)).toEqual(true);
    });

    test('getProfileIsLoading returns false when is not loading', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                isLoading: false
            }
        };

        expect(getProfileIsLoading(state as StateSchema)).toEqual(false);
    });

    test('getProfileIsLoading works with empty state and return false', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getProfileIsLoading(state as StateSchema)).toEqual(false);
    });
});
