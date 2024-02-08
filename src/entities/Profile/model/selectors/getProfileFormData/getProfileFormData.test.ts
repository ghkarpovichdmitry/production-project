import { getProfileFormData } from './getProfileFormData';
import { type StateSchema } from 'app/providers/StoreProvider';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';

describe('getProfileFormData tests', function () {
    test('getProfileFormData returns state', () => {
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

        const state: DeepPartial<StateSchema> = {
            profile: {
                data: testData,
                form: testData,
                isLoading: false,
                readonly: true
            }
        };

        expect(getProfileFormData(state as StateSchema)).toEqual(testData);
    });

    test('getProfileFormData works with empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getProfileFormData(state as StateSchema)).toEqual(undefined);
    });
});
