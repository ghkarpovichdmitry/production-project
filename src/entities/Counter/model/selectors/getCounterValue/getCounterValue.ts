import { type CounterScheme } from 'entities/Counter';
import { getCounter } from '../getCounter/getCounter';
import { createSelector } from 'reselect';

export const getCounterValue =
    createSelector(getCounter, (counter: CounterScheme) => counter.value);
