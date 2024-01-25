import { type CounterSchema } from 'entities/Counter';
import { getCounter } from '../getCounter/getCounter';
import { createSelector } from 'reselect';

export const getCounterValue =
    createSelector(getCounter, (counter: CounterSchema) => counter.value);
