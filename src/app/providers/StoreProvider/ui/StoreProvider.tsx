import { type DeepPartial, type ReducersMapObject } from '@reduxjs/toolkit';
import { type ReactElement, type ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from 'app/providers/StoreProvider';
import { type StateScheme } from 'app/providers/StoreProvider/config/StateScheme';

// ! In order to make async reducers work in 'storybook' we need to add asyncReducers into storeProvider through props
interface StoreProviderProps {
    children: ReactNode
    initialState?: DeepPartial<StateScheme>
    asyncReducers?: DeepPartial<ReducersMapObject<StateScheme>>
}

export const StoreProvider = ({
    children,
    initialState,
    asyncReducers
}: StoreProviderProps): ReactElement => {
    const store = createReduxStore(
        initialState as StateScheme,
        asyncReducers as ReducersMapObject<StateScheme>
    );

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
