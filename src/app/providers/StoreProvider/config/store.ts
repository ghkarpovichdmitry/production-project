import { configureStore } from '@reduxjs/toolkit';
import { type StateScheme } from './StateScheme';
import { counterReducer } from 'entities/Counter';

export const createReduxStore = (initialState?: StateScheme): any => {
    return configureStore<StateScheme>({
        reducer: {
            counter: counterReducer
        },
        devTools: _IS_DEV_,
        preloadedState: initialState
    });
};
