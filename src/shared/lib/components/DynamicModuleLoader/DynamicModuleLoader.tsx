import React, { type FC, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { type StoreWithReducerManager } from 'app/providers/StoreProvider';
import { type StateSchemeKey } from 'app/providers/StoreProvider/config/StateScheme';
import { type Reducer } from 'redux';

export type ReducersList = {
    [name in StateSchemeKey]?: Reducer // should be optional
};

type ReducersListEntry = [StateSchemeKey, Reducer];

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
        Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
            store.reducerManager.add(name, reducer);
            dispatch({ type: `@INIT ${name} reducer` });
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name, _reducer]: ReducersListEntry) => {
                    store.reducerManager.remove(name);
                    dispatch({ type: `@DESTROY ${name} reducer` });
                });
            }
        };
    }, [store.reducerManager, dispatch, reducers, removeAfterUnmount]);

    return (
        <>{children}</>
    );
};
