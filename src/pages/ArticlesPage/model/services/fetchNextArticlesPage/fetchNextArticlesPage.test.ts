import { fetchNextArticlesPage } from './fetchNextArticlesPage';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { ArticleView } from 'entities/Article';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

jest.mock('../fetchArticlesList/fetchArticlesList');

describe('fetchNextArticlesPage test', function () {
    test('success, fetchArticlesList called', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlesPage: {
                isLoading: false,
                error: undefined,
                ids: [],
                entities: {},
                view: ArticleView.SMALL,
                page: 2,
                hasMore: true
            }
        });

        await thunk.callThunk();

        expect(thunk.dispatch).toHaveBeenCalledTimes(4);
        expect(fetchArticlesList).toHaveBeenCalledWith({ page: 3 });
    });

    test('fetchArticlesList not called', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlesPage: {
                isLoading: false,
                error: undefined,
                ids: [],
                entities: {},
                view: ArticleView.SMALL,
                page: 2,
                hasMore: false
            }
        });

        await thunk.callThunk();

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(fetchArticlesList).not.toHaveBeenCalled();
    });

    test('fetchArticlesList not called because of loading', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlesPage: {
                isLoading: true,
                error: undefined,
                ids: [],
                entities: {},
                view: ArticleView.SMALL,
                page: 2,
                hasMore: true
            }
        });

        await thunk.callThunk();

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(fetchArticlesList).not.toHaveBeenCalled();
    });
});
