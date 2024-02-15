export { ArticleDetails } from './ui/ArticleDetails/ArticleDetails';

export { type Article } from './model/types/Article';
export type { ArticleDetailsSchema } from './model/types/ArticleDetailsSchema';
export { fetchArticleById } from './model/services/fetchArticleById';
export {
    getArticleDetailsData, getArticleDetailsIsLoading, getArticleDetailsError
} from './model/selectors/articleDetailsSelectors';
