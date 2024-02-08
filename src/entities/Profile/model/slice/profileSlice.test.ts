import { profileReducer, profileActions } from './profileSlice';
import { type ProfileSchema, updateProfileData } from 'entities/Profile';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { ValidateProfileError } from 'entities/Profile/model/types/profile';

const profileData = {
    firstname: 'Dzmitry',
    lastname: undefined,
    age: undefined,
    currency: Currency.ZL,
    country: Country.Poland,
    city: undefined,
    username: undefined,
    avatar: undefined
};

const profileState = {
    data: profileData,
    form: profileData,
    isLoading: false,
    error: undefined,
    readonly: false,
    validateErrors: undefined
};

describe('profileSlice test', function () {
    test('test setReadOnly to be true', async () => {
        const state: DeepPartial<ProfileSchema> = profileState;

        expect(
            profileReducer(state as ProfileSchema,
                profileActions.setReadOnly(true)
            )).toEqual({
            ...profileState,
            readonly: true
        });
    });

    test('test setReadOnly to be false', async () => {
        const state: DeepPartial<ProfileSchema> = {
            ...profileState,
            readonly: true
        };

        expect(
            profileReducer(state as ProfileSchema,
                profileActions.setReadOnly(false)
            )).toEqual({
            ...profileState,
            readonly: false
        });
    });

    test('test cancelEdit', async () => {
        const state: DeepPartial<ProfileSchema> = {
            ...profileState,
            form: {
                ...profileState.data,
                city: 'Warsaw'
            },
            validateErrors: [ValidateProfileError.INCORRECT_AGE]
        };

        expect(
            profileReducer(state as ProfileSchema,
                profileActions.setReadOnly(false)
            )).toEqual({
            ...profileState,
            readonly: false,
            form: {
                ...profileState.data,
                city: 'Warsaw'
            },
            validateErrors: [ValidateProfileError.INCORRECT_AGE]
        });

        expect(
            profileReducer(state as ProfileSchema,
                profileActions.cancelEdit()
            )).toEqual({
            ...profileState,
            readonly: true,
            form: profileState.data,
            validateErrors: undefined
        });
    });

    test('test updateProfile', async () => {
        const state: DeepPartial<ProfileSchema> = profileState;

        expect(
            profileReducer(state as ProfileSchema,
                profileActions.updateProfile({ city: 'Lodz' })
            )).toEqual({
            ...profileState,
            form: {
                ...profileState.data,
                city: 'Lodz'
            }
        });
    });

    test('test updateProfile service pending', async () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [ValidateProfileError.NO_DATA]
        };

        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.pending
        )).toEqual({
            isLoading: true,
            validateErrors: undefined
        });
    });

    test('test updateProfile service fulfilled', async () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        };

        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.fulfilled(profileData, '', undefined, undefined)
        )).toEqual({
            isLoading: false,
            readonly: true,
            data: profileData,
            form: profileData,
        });
    });

    test('test updateProfile service rejected', async () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        };

        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.rejected(null, '', undefined, ValidateProfileError.SERVER_ERROR, undefined)
        )).toEqual({
            isLoading: false,
            error: ValidateProfileError.SERVER_ERROR
        });
    });
});
