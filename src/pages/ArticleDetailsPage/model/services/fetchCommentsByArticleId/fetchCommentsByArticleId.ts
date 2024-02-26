import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from 'app/providers/StoreProvider';
import { type Comment } from 'entities/Comment/model/types/comment';

export const fetchCommentsByArticleId = createAsyncThunk<Comment[], string | undefined, ThunkConfig<string>>(
    'articleDetails/fetchCommentsByArticleId', async (articleId, thunkAPI) => {
        const {
            extra,
            rejectWithValue
        } = thunkAPI;

        if (!articleId) {
            return rejectWithValue({ message: 'Error fetching comments, there is no such id' });
        }

        try {
            const response = await extra.api.get<Comment[]>('/comments', {
                params: {
                    articleId,
                    _expand: 'user'
                }
            });

            if (!response.data) {
                console.log('fetchCommentsByArticleId was failed = there are no data');
                throw new Error();
            }

            return response.data;
        } catch (error) {
            console.error('Error fetching comments:', error);
            return rejectWithValue({
                message: 'Error fetching comments',
                error
            });
        }
    });
