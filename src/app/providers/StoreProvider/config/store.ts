import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit';
import { type StateSchema, type ThunkExtraArg } from './StateSchema';
import { userReducer } from 'entities/User';
import { counterReducer } from 'entities/Counter';
import { createReducerManager } from './reducerManager';
import { $api } from 'shared/api/api';
import { type To } from '@remix-run/router';
import { type NavigateOptions } from 'react-router/dist/lib/context';
import { type CombinedState, type Reducer } from 'redux';

export const createReduxStore = (
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
    navigate?: (to: To, options?: NavigateOptions) => void
): any => {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer
    };

    const reducerManager = createReducerManager(rootReducers);

    const extraArg: ThunkExtraArg = {
        api: $api,
        navigate
    };

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: _IS_DEV_,
        preloadedState: initialState,
        middleware: getDefaultMiddleware => getDefaultMiddleware({
            thunk: { extraArgument: extraArg }
        })
    });

    // TODO fix this later
    // @ts-expect-error
    store.reducerManager = reducerManager;

    return store;
};

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
