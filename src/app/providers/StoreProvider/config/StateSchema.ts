import { type CounterSchema } from 'entities/Counter';
import { type UserSchema } from 'entities/User';
import { type LoginSchema } from 'features/AuthByUserName';
import { type ProfileSchema } from 'entities/Profile';
import { type ArticleDetailsSchema } from 'entities/Article';
import { type ArticleDetailsCommentsSchema } from 'pages/ArticleDetailsPage';
import { type AddCommentFormSchema } from 'features/AddCommentForm';
import { type ArticlesPageSchema } from 'pages/ArticlesPage';
import { type EnhancedStore, type ReducersMapObject } from '@reduxjs/toolkit';
import { type AnyAction, type CombinedState, type Reducer } from 'redux';
import { type AxiosInstance } from 'axios';
import { type To } from '@remix-run/router';
import { type NavigateOptions } from 'react-router/dist/lib/context';

export interface StateSchema {
    counter: CounterSchema
    user: UserSchema

    // Async reducers:
    loginForm?: LoginSchema
    profile?: ProfileSchema
    articleDetails?: ArticleDetailsSchema
    articleDetailsComments?: ArticleDetailsCommentsSchema
    addCommentForm?: AddCommentFormSchema
    articlesPage?: ArticlesPageSchema
}

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
    add: (key: StateSchemaKey, reducer: Reducer) => void
    remove: (key: StateSchemaKey) => void
}

export type StateSchemaKey = keyof StateSchema;

export interface StoreWithReducerManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager
}

export interface ThunkExtraArg {
    api: AxiosInstance
    navigate?: (to: To, options?: NavigateOptions) => void
}

export interface ThunkConfig<T> {
    rejectWithValue: T
    extra: ThunkExtraArg
    state: StateSchema
}
