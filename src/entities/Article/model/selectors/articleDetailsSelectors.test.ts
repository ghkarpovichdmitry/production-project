import { type StateSchema } from 'app/providers/StoreProvider';
import { ArticleBlockType, ArticleType } from 'entities/Article/model/types/Article';
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from './articleDetailsSelectors';

describe('Article details selectors tests', function () {
    test('getArticleDetailsData returns state', () => {
        const testData = {
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

        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                isLoading: false,
                data: testData
            }
        };

        expect(getArticleDetailsData(state as StateSchema)).toEqual(testData);
    });

    test('getArticleDetailsData works with empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined);
    });

    test('getArticleDetailsIsLoading should return isLoading true', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                isLoading: true,
            }
        };

        expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(true);
    });

    test('getArticleDetailsIsLoading should return isLoading false with empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(false);
    });

    test('getArticleDetailsError should return error', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                isLoading: false,
                error: 'some error',
            }
        };

        expect(getArticleDetailsError(state as StateSchema)).toEqual('some error');
    });

    test('getArticleDetailsError should return undefined with empty state', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {}
        };

        expect(getArticleDetailsError(state as StateSchema)).toEqual(undefined);
    });
});
