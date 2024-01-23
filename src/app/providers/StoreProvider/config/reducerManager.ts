import { type AnyAction, combineReducers, type Reducer } from 'redux';
import { type ReducerManager, type StateScheme, type StateSchemeKey } from './StateScheme';
import { type ReducersMapObject } from '@reduxjs/toolkit';

export function createReducerManager (initialReducers: ReducersMapObject<StateScheme>): ReducerManager {
    const reducers = { ...initialReducers };

    let combinedReducer = combineReducers(reducers);

    let keysToRemove: StateSchemeKey[] = [];

    return {
        getReducerMap: () => reducers,

        reduce: (state: StateScheme, action: AnyAction) => {
            if (keysToRemove.length > 0) {
                state = { ...state };
                for (const key of keysToRemove) {
                    // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
                    delete state[key];
                }
                keysToRemove = [];
            }

            return combinedReducer(state, action);
        },

        add: (key: StateSchemeKey, reducer: Reducer) => {
            if (!key || reducers[key]) {
                return;
            }

            reducers[key] = reducer;

            combinedReducer = combineReducers(reducers);
        },

        remove: (key: StateSchemeKey) => {
            if (!key || !reducers[key]) {
                return;
            }
            // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
            delete reducers[key];
            keysToRemove.push(key);

            combinedReducer = combineReducers(reducers);
        }
    };
}
