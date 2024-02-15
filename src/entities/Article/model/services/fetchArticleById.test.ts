import { fetchArticleById } from './fetchArticleById';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { ArticleBlockType, ArticleType } from 'entities/Article/model/types/Article';

describe('fetchArticleById test', function () {
    test('fetchArticleById success', async () => {
        const article = {
            id: '1',
            title: 'Article details title',
            subtitle: 'Article details subtitle',
            img: 'http://fake-image-url',
            views: 0,
            createdAt: '26.02.2022',
            type: [ArticleType.IT],
            blocks: [{
                id: '1',
                type: ArticleBlockType.TEXT,
                title: 'Заголовок этого блока',
                paragraphs: [
                    'Программа, которую по традиции называют «Hello, world!», ']
            }],
        };
        const thunk = new TestAsyncThunk(fetchArticleById);

        thunk.api.get.mockReturnValue(Promise.resolve({ data: article }));

        const result = await thunk.callThunk('1');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(article);
    });

    test('fetchArticleById error', async () => {
        const thunk = new TestAsyncThunk(fetchArticleById);

        thunk.api.get.mockReturnValue(Promise.resolve({ status: 400 }));
        const result = await thunk.callThunk('1');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('Some error happen..');
    });
});
