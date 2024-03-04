import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from 'app/providers/StoreProvider';
import { type Comment } from 'entities/Comment';
import { getUserAuthData } from 'entities/User';
import { getArticleDetailsData } from 'entities/Article';
import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<Comment, string, ThunkConfig<string>>(
    'articleDetails/addCommentForArticle', async (text, thunkAPI) => {
        const {
            extra,
            dispatch,
            rejectWithValue,
            getState
        } = thunkAPI;

        const userData = getUserAuthData(getState());
        const article = getArticleDetailsData(getState());

        if (!userData || !text || !article) {
            return rejectWithValue('No data..');
        }

        try {
            const response = await extra.api.post<Comment>('/comments', {
                articleId: article.id,
                userId: userData.id,
                text
            });

            if (!response.data) {
                throw new Error();
            }

            // two variants could be used for update page after sending the comment: 1)
            await dispatch(fetchCommentsByArticleId(article.id));
            // 2) get comment from response and add to state
            // const newComment = {
            //     articleId: response.data.id,
            //     userId: userData,
            //     text: response.data.text
            // }
            // dispatch(articleDetailsCommentsActions.addComment(article.id));

            return response.data;
        } catch (e) {
            return rejectWithValue('Some error happen while adding new comment..');
        }
    });
