import React, { type FC, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { type StoreWithReducerManager } from 'app/providers/StoreProvider';
import { type StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { type Reducer } from 'redux';

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer // should be optional
};

export interface DynamicModuleLoaderProps {
    reducers: ReducersList
    removeAfterUnmount?: boolean
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
    const {
        reducers,
        children,
        removeAfterUnmount
    } = props;
    const dispatch = useDispatch();
    const store = useStore() as StoreWithReducerManager;

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]) => {
            store.reducerManager.add(name as StateSchemaKey, reducer);
            dispatch({ type: `@INIT ${name} reducer` });
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name, _reducer]) => {
                    store.reducerManager.remove(name as StateSchemaKey);
                    dispatch({ type: `@DESTROY ${name} reducer` });
                });
            }
        };
    }, [store.reducerManager, dispatch, reducers, removeAfterUnmount]);

    return (
        <>{children}</>
    );
};
