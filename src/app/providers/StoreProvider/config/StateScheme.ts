import { type CounterScheme } from 'entities/Counter';
import { type UserScheme } from 'entities/User';
import { type LoginScheme } from 'features/AuthByUserName';
import { type EnhancedStore, type ReducersMapObject } from '@reduxjs/toolkit';
import { type AnyAction, type CombinedState, type Reducer } from 'redux';

export interface StateScheme {
    counter: CounterScheme
    user: UserScheme

    // Async reducers:
    loginForm?: LoginScheme
}

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateScheme>
    reduce: (state: StateScheme, action: AnyAction) => CombinedState<StateScheme>
    add: (key: StateSchemeKey, reducer: Reducer) => void
    remove: (key: StateSchemeKey) => void
}

export type StateSchemeKey = keyof StateScheme;

export interface StoreWithReducerManager extends EnhancedStore<StateScheme> {
    reducerManager: ReducerManager
}
