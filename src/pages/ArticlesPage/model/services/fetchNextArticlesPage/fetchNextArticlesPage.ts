import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from 'app/providers/StoreProvider';
import {
    getArticlesPageHasMore,
    getArticlesPageIsLoading,
    getArticlesPageNum
} from '../../selectors/articlesPageSelectors';
import { articlesPageActions } from '../../slices/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

// eslint-disable-next-line  @typescript-eslint/no-invalid-void-type
export const fetchNextArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
    'articlesPage/fetchNextArticlesPage', async (_, thunkAPI) => {
        const {
            dispatch,
            getState
        } = thunkAPI;
        const pageNumber = getArticlesPageNum(getState());
        const hasMore = getArticlesPageHasMore(getState());
        const isLoading = getArticlesPageIsLoading(getState());

        if (hasMore && !isLoading) {
            dispatch(articlesPageActions.setPage(pageNumber + 1));
            await dispatch(fetchArticlesList({
                page: pageNumber + 1
            }));
        }
    }
);
