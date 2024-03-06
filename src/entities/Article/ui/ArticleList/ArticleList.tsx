import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleList.module.scss';
import { type ReactElement, memo, type ReactNode } from 'react';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { type Article, ArticleView } from '../../model/types/Article';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { ArticleListItemSkeleton } from '../../ui/ArticleListItem/ArticleListItemSkeleton';

export interface ArticleListProps {
    className?: string
    articles: Article[]
    isLoading?: boolean
    view?: ArticleView
}

const getSkeletons = (view: ArticleView): ReactNode => {
    return new Array(view === ArticleView.SMALL ? 9 : 3)
        .fill(0)
        .map((_, i) => (
            <ArticleListItemSkeleton view={view} key={i} className={cls.card}/>)
        );
};

export const ArticleList = memo(({
    className,
    view = ArticleView.SMALL,
    isLoading,
    articles
}: ArticleListProps): ReactElement | any => {
    console.log('ArticleList rendered');
    const { t } = useTranslation('articleDetails');

    if (isLoading) {
        return (
            <div className={classNames('', {}, [className, cls[view]])}>
                {getSkeletons(view)}
            </div>
        );
    }

    const renderArticle = (article: Article): ReactNode => (
        <ArticleListItem
            key={article.id}
            view={view}
            article={article}
            className={cls.card}
        />
    );

    return (
        <div className={classNames('', {}, [className, cls[view]])}>
            {articles.length
                ? articles.map((article: Article) => renderArticle(article))
                : <Text text={t('There are no articles')}/>}
        </div>
    );
});

ArticleList.displayName = 'ArticleList';
