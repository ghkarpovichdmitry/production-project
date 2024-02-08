import { getProfileData } from './getProfileData';
import { type StateSchema } from 'app/providers/StoreProvider';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';

describe('getProfileData tests', function () {
    test('getProfileData returns state', () => {
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
                data: testData
            }
        };

        expect(getProfileData(state as StateSchema)).toEqual(testData);
    });

    test('getProfileData works with empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
