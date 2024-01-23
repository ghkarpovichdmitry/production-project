import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit';
import { type StateScheme } from './StateScheme';
import { userReducer } from 'entities/User';
import { counterReducer } from 'entities/Counter';
import { createReducerManager } from './reducerManager';

export const createReduxStore = (
    initialState?: StateScheme,
    asyncReducers?: ReducersMapObject<StateScheme>
): any => {
    const rootReducers: ReducersMapObject<StateScheme> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer
    };

    const reducerManager = createReducerManager(rootReducers);

    const store = configureStore<StateScheme>({
        reducer: reducerManager.reduce,
        devTools: _IS_DEV_,
        preloadedState: initialState
    });

    // TODO fix this later
    // @ts-expect-error
    store.reducerManager = reducerManager;

    return store;
};
