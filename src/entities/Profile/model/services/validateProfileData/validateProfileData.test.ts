import { validateProfileData } from './validateProfileData';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidateProfileError } from 'entities/Profile/model/types/profile';

const testData = {
    firstname: 'Dzmitry',
    lastname: 'Karpovich',
    age: 33,
    currency: Currency.ZL,
    country: Country.Poland,
    city: 'Gdansk',
    username: 'admin',
    avatar: 'https://images.unsplash.com/photo-1706779847951-6dd0ac82cf01?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMzN8fHxlbnwwfHx8fHw%3D'
};

describe('validateProfileData test', function () {
    test('validateProfileData no errors', () => {
        const errors = validateProfileData(testData);

        expect(errors).toEqual([]);
    });

    test('validateProfileData Incorrect user data without firstname', () => {
        const formData = { ...testData, firstname: undefined };
        const errors = validateProfileData(formData);

        expect(errors).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });

    test('validateProfileData Incorrect user data without lastname', () => {
        const formData = { ...testData, lastname: undefined };
        const errors = validateProfileData(formData);

        expect(errors).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });

    test('validateProfileData Incorrect user data without age', () => {
        const formData = { ...testData, age: undefined };
        const errors = validateProfileData(formData);

        expect(errors).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });

    test('validateProfileData Incorrect user data without age', () => {
        const formData = { ...testData, age: undefined, lastname: undefined };
        const errors = validateProfileData(formData);

        expect(errors).toEqual([ValidateProfileError.INCORRECT_USER_DATA, ValidateProfileError.INCORRECT_AGE]);
    });

    test('validateProfileData many errors if empty object', () => {
        const errors = validateProfileData({});

        expect(errors).toEqual([ValidateProfileError.INCORRECT_USER_DATA, ValidateProfileError.INCORRECT_AGE, ValidateProfileError.INCORRECT_USERNAME]);
    });

    test('validateProfileData no data', () => {
        const errors = validateProfileData(undefined);

        expect(errors).toEqual([ValidateProfileError.NO_DATA]);
    });
});
