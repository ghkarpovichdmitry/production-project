import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type Article } from '../types/Article';
import { type ArticleDetailsSchema } from '../types/ArticleDetailsSchema';
import { fetchArticleById } from '../services/fetchArticleById';

const initialState: ArticleDetailsSchema = {
    isLoading: false,
    error: undefined,
    data: undefined
};

export const articleDetailsSlice = createSlice({
    name: 'ArticleDetails',
    initialState,
    reducers: {
        setReadOnly: (state: ArticleDetailsSchema, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleById.pending, (state: ArticleDetailsSchema) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(fetchArticleById.fulfilled, (state: ArticleDetailsSchema, action: PayloadAction<Article>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchArticleById.rejected, (state: ArticleDetailsSchema, action: any) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    }
});

export const { actions: articleDetailsActions } = articleDetailsSlice;
export const { reducer: articleDetailsReducer } = articleDetailsSlice;
