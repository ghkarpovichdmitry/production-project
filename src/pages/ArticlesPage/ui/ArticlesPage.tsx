import { memo, type ReactElement, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlesPage.module.scss';
import { useSelector } from 'react-redux';
import { ArticleList, type ArticleView } from 'entities/Article';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { articlesPageActions, articlesPageReducer, getArticles } from '../model/slices/articlesPageSlice';
import { fetchArticlesList } from '../model/services/fetchArticlesList/fetchArticlesList';
import {
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageView
} from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';
import { Text } from 'shared/ui/Text/Text';
import { ArticleViewChanger } from 'features/ArticleViewChanger';

interface ArticlesPageProps {
    className?: string
}

const reducers: ReducersList = {
    articlesPage: articlesPageReducer
};

const ArticlesPage = ({ className }: ArticlesPageProps): ReactElement => {
    const articles = useSelector(getArticles.selectAll);
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticlesPageIsLoading);
    const error = useSelector(getArticlesPageError);
    const view = useSelector(getArticlesPageView);

    useInitialEffect(() => {
        dispatch(articlesPageActions.initState());
    }, []);

    useInitialEffect(() => {
        console.log('fetchArticlesList called because dispatch called');
        dispatch(fetchArticlesList()); // todo if login need to be hard refreshed => potential bug
    }, [dispatch]);

    const onChangeView = useCallback((viewType: ArticleView) => {
        dispatch(articlesPageActions.setView(viewType));
    }, [dispatch]);

    if (error) {
        return <Text title={error} text="error"/>;
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.ArticlesPage, {}, [className])}>
                <ArticleViewChanger
                    view={view}
                    onViewClick={onChangeView}
                />
                <ArticleList
                    view={view}
                    isLoading={isLoading}
                    articles={articles}
                />
            </div>
        </DynamicModuleLoader>
    );
};

ArticlesPage.displayName = 'ArticlesPage';

export default memo(ArticlesPage);
