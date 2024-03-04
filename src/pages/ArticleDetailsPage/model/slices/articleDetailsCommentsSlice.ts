import { createEntityAdapter, createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type Comment } from 'entities/Comment';
import { type StateSchema } from 'app/providers/StoreProvider';
import { type ArticleDetailsCommentsSchema } from '../types/ArticleDetailsCommentsSchema';
import {
    fetchCommentsByArticleId
} from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId';

const articleDetailsCommentsAdapter = createEntityAdapter<Comment>({
    selectId: (comment: Comment) => comment.id
});

export const getArticleDetailsComments = articleDetailsCommentsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsComments || articleDetailsCommentsAdapter.getInitialState()
);

// Here I use data normalisation
export const articleDetailsCommentsSlice = createSlice({
    name: 'articleDetailsCommentsSlice',
    initialState: articleDetailsCommentsAdapter.getInitialState<ArticleDetailsCommentsSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {}
    }),
    reducers: {
        addComment: (state: ArticleDetailsCommentsSchema, action: PayloadAction<Comment>) => {
            articleDetailsCommentsAdapter.setOne(state, action.payload); // addComment may be removed
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCommentsByArticleId.pending, (state: ArticleDetailsCommentsSchema) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(fetchCommentsByArticleId.fulfilled, (
                state: ArticleDetailsCommentsSchema, action: PayloadAction<Comment[]>) => {
                state.isLoading = false;
                articleDetailsCommentsAdapter.setAll(state, action.payload);
            })
            .addCase(fetchCommentsByArticleId.rejected, (
                state: ArticleDetailsCommentsSchema, action: any) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    }
});

export const { reducer: articleDetailsCommentsReducer } = articleDetailsCommentsSlice;
