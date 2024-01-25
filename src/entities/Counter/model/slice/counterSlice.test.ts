import { counterActions, counterReducer } from './counterSlice';
import { type CounterSchema } from '../types/counterSchema';

describe('counterSlice test', function () {
    test('Decrement test', () => {
        const state: CounterSchema = {
            value: 10
        };

        expect(counterReducer(state, counterActions.decrement())).toEqual({
            value: 9
        });
    });

    test('Increment test', () => {
        const state: CounterSchema = {
            value: 10
        };

        expect(counterReducer(state, counterActions.increment())).toEqual({
            value: 11
        });
    });

    test('Increment with undefined state should return initial value + 1', () => {
        expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 1 });
    });
});
