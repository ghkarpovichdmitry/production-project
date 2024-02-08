import { updateProfileData } from './updateProfileData';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { ValidateProfileError } from 'entities/Profile/model/types/profile';

const profileData = {
    firstname: 'Dzmitry',
    lastname: 'Karpov',
    age: 33,
    currency: Currency.ZL,
    country: Country.Poland,
    city: 'Gdansk',
    username: 'Admin',
    avatar: ''
};

describe('updateProfileData test', function () {
    test('updateProfileData success', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: profileData
            }
        });

        thunk.api.put.mockReturnValue(Promise.resolve({ data: profileData }));

        const result = await thunk.callThunk();

        expect(thunk.api.put).toHaveBeenCalled();
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(profileData);
    });

    test('updateProfileData rejected and return SERVER_ERROR', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: profileData
            }
        });

        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk();

        expect(thunk.api.put).toHaveBeenCalled();
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
    });

    test('updateProfileData rejected and return INCORRECT_USER_DATA', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: { ...profileData, firstname: undefined }
            }
        });

        const result = await thunk.callThunk();

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });
});
