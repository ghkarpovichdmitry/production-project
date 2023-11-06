import { type DeepPartial } from '@reduxjs/toolkit';
import { getCounter } from './getCounter';
import { type StateScheme } from 'app/providers/StoreProvider';

describe('getCounter fn test', function () {
    test('Should return counter value', () => {
        const state: DeepPartial<StateScheme> = {
            counter: { value: 10 }
        };
        expect(getCounter(state as StateScheme)).toEqual({ value: 10 });
    });
});
