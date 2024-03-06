import { articleDetailsReducer } from './articleDetailsSlice';
import { type ArticleBlock, ArticleBlockType, ArticleType } from 'entities/Article/model/types/Article';
import { type ArticleDetailsSchema, fetchArticleById } from 'entities/Article';

const article = {
    id: '1',
    title: 'Article details title',
    subtitle: 'Article details subtitle',
    img: 'http://fake-image-url',
    views: 10,
    user: {
        id: '1',
        username: 'Alex'
    },
    createdAt: '26.02.2022',
    type: [ArticleType.IT],
    blocks: [{
        id: '2',
        type: ArticleBlockType.IMAGE,
        src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
        title: 'Рисунок 1 - скриншот сайта'
    }] as ArticleBlock[]
};

describe('articleDetailsSlice test', function () {
    test('test fetchArticleById service pending', async () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: false,
            data: undefined
        };

        expect(articleDetailsReducer(
            state as ArticleDetailsSchema,
            fetchArticleById.pending
        )).toEqual({
            isLoading: true,
            error: undefined,
            data: undefined
        });
    });

    test('test fetchArticleById service fulfilled', async () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: true,
        };

        expect(articleDetailsReducer(
            state as ArticleDetailsSchema,
            fetchArticleById.fulfilled(article, '', '1', undefined)
        )).toEqual({
            isLoading: false,
            error: undefined,
            data: article,
        });
    });

    test('test fetchArticleById service rejected', async () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: true,
        };

        expect(articleDetailsReducer(
            state as ArticleDetailsSchema,
            fetchArticleById.rejected(null, '', '1', 'error', undefined)
        )).toEqual({
            isLoading: false,
            error: 'error'
        });
    });
});
