import { type DeepPartial, type ReducersMapObject } from '@reduxjs/toolkit';
import { type StoryFn } from '@storybook/react';
import { type StateScheme, StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUserName/model/slice/loginSlice';

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateScheme>> = {
    loginForm: loginReducer
};

export const StoreDecorator = (
    state: DeepPartial<StateScheme>,
    asyncReducers?: DeepPartial<ReducersMapObject<StateScheme>>
) => (StoryComponent: StoryFn) => { // eslint-disable-line react/display-name
    return (
        <StoreProvider
            initialState={state}
            asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
        >
            <StoryComponent/>
        </StoreProvider>
    );
};

StoreDecorator.displayName = 'StoreDecorator';
