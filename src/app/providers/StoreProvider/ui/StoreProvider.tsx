import { type DeepPartial } from '@reduxjs/toolkit';
import { type ReactElement, type ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from 'app/providers/StoreProvider';
import { type StateScheme } from 'app/providers/StoreProvider/config/StateScheme';

interface StoreProviderProps {
    children: ReactNode
    initialState?: DeepPartial<StateScheme>
}

export const StoreProvider = ({ children, initialState }: StoreProviderProps): ReactElement => {
    const store = createReduxStore(initialState as StateScheme);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
