import { type DeepPartial } from '@reduxjs/toolkit';
import { getCounterValue } from './getCounterValue';
import { type StateScheme } from 'app/providers/StoreProvider';

describe('getCounterValue fn test', function () {
    test('Should return counter value number', () => {
        const state: DeepPartial<StateScheme> = {
            counter: { value: 10 }
        };
        expect(getCounterValue(state as StateScheme)).toEqual(10);
    });
});
