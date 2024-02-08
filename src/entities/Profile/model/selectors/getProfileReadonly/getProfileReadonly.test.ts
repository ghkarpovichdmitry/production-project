import { getProfileReadonly } from './getProfileReadonly';
import { type StateSchema } from 'app/providers/StoreProvider';

describe('getProfileReadonly tests', function () {
    test('getProfileReadonly returns true', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                readonly: true
            }
        };

        expect(getProfileReadonly(state as StateSchema)).toBe(true);
    });

    test('getProfileReadonly returns false', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                readonly: false
            }
        };

        expect(getProfileReadonly(state as StateSchema)).toBe(false);
    });

    test('getProfileReadonly works with empty state and return undefined', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getProfileReadonly(state as StateSchema)).toBe(undefined);
    });
});
