import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from 'app/providers/StoreProvider';
import { type Article } from 'entities/Article';

export const fetchArticlesList = createAsyncThunk<Article[], any, ThunkConfig<string>>(
    'articlesPage/fetchArticlesList', async (articleId, thunkAPI) => {
        const {
            extra,
            rejectWithValue
        } = thunkAPI;

        // TODO fix bug 403 error after login

        try {
            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user' // we need to use avatar in view big
                }
            });

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            return rejectWithValue('Some error happen while fetching articles..');
        }
    });
