import { type DeepPartial, type ReducersMapObject } from '@reduxjs/toolkit';
import { type ReactElement, type ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from 'app/providers/StoreProvider';
import { type StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

// ! In order to make async reducers work in 'storybook' we need to add asyncReducers into storeProvider through props
interface StoreProviderProps {
    children: ReactNode
    initialState?: DeepPartial<StateSchema>
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

export const StoreProvider = ({
    children,
    initialState,
    asyncReducers
}: StoreProviderProps): ReactElement => {
    const store = createReduxStore(
        initialState as StateSchema,
        asyncReducers as ReducersMapObject<StateSchema>
    );

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
