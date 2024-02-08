import { getProfileValidateErrors } from './getProfileValidateErrors';
import { type StateSchema } from 'app/providers/StoreProvider';
import { ValidateProfileError } from 'entities/Profile/model/types/profile';

describe('getProfileValidateErrors tests', function () {
    test('getProfileValidateErrors returns errors array', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors: [ValidateProfileError.SERVER_ERROR, ValidateProfileError.INCORRECT_AGE]
            }
        };

        expect(getProfileValidateErrors(state as StateSchema)).toEqual([ValidateProfileError.SERVER_ERROR, ValidateProfileError.INCORRECT_AGE]);
    });

    test('getProfileValidateErrors works with empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
    });
});
