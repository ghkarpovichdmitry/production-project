import { type ReducersMapObject } from '@reduxjs/toolkit';
import { type ReactElement, type ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from 'app/providers/StoreProvider';
import { type StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { useNavigate } from 'react-router';

// ! In order to make async reducers work in 'storybook' we need to add asyncReducers into storeProvider through props
interface StoreProviderProps {
    children: ReactNode
    initialState?: DeepPartial<StateSchema>
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

export const StoreProvider = (props: StoreProviderProps): ReactElement => {
    const {
        children,
        initialState,
        asyncReducers
    } = props;
    const navigate = useNavigate();

    const store = createReduxStore(
        initialState as StateSchema,
        asyncReducers as ReducersMapObject<StateSchema>,
        navigate
    );

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
