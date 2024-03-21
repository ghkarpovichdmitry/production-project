import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from 'app/providers/StoreProvider';
import { type Article } from 'entities/Article';
import { getArticlesPageLimit } from '../../selectors/articlesPageSelectors';

interface FetchArticlesPageProps {
    page?: number
}

export const fetchArticlesList = createAsyncThunk<Article[], FetchArticlesPageProps, ThunkConfig<string>>(
    'articlesPage/fetchArticlesList', async (props, thunkAPI) => {
        const {
            extra,
            getState,
            rejectWithValue
        } = thunkAPI;
        const { page = 1 } = props;
        const limit = getArticlesPageLimit(getState());

        // TODO fix bug 403 error after login
        try {
            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user', // we need to use avatar in view big
                    _page: page,
                    _limit: limit
                }
            });
            return response.data;
        } catch (e) {
            return rejectWithValue('Some error happen while fetching articles..');
        }
    });
