import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit';
import { loginReducer } from 'features/AuthByUserName/index';
import { type StateScheme } from './StateScheme';
import { userReducer } from 'entities/User';
import { counterReducer } from 'entities/Counter';

export const createReduxStore = (initialState?: StateScheme): any => {
    const rootReducers: ReducersMapObject<StateScheme> = {
        counter: counterReducer,
        user: userReducer,
        loginForm: loginReducer
    };

    return configureStore<StateScheme>({
        reducer: rootReducers,
        devTools: _IS_DEV_,
        preloadedState: initialState
    });
};
