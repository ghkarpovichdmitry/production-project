import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { type ReactElement, useCallback } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { CommentList } from 'entities/Comment';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import cls from './ArticleDetailsPage.module.scss';
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
    articleDetailsCommentsReducer,
    getArticleDetailsComments
} from '../../model/slices/articleDetailsCommentsSlice';
import { useSelector } from 'react-redux';
import { getArticleCommentsError, getArticleCommentsIsLoading } from '../../model/selectors/comments';
import {
    fetchCommentsByArticleId
} from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { AddCommentForm } from 'features/AddCommentForm';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

interface ArticleDetailsPageProps {
    className?: string
}

const reducers: ReducersList = {
    articleDetailsComments: articleDetailsCommentsReducer
};

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps): ReactElement => {
    const { t } = useTranslation('articleDetails');
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const comments = useSelector(getArticleDetailsComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const error = useSelector(getArticleCommentsError);

    useInitialEffect(() => dispatch(fetchCommentsByArticleId(id)), [id]);

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    if (!id) {
        return (
            <div className={classNames('', {}, [className])}>
                <h1>{t('Article was not found')}</h1>
            </div>
        );
    }

    if (error) {
        return <Text
            className={cls.commentsTitle}
            theme={TextTheme.ERROR}
            title={t('Fetching comments error')}
        />;
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames('', {}, [className])}>
                <ArticleDetails id={id}/>
                <Text
                    className={cls.commentsTitle}
                    title={t('Comments')}
                />
                <AddCommentForm onSendComment={onSendComment} isLoading={commentsIsLoading}/>
                {/* {error */}
                {/*     ? <Text className={cls.commentsTitle} theme={TextTheme.ERROR} title={t('Fetching comments error')}/> */}
                {/*     : null */}
                {/* } */}
                <CommentList
                    className={cls.comments}
                    isLoading={commentsIsLoading}
                    comments={comments}
                />
            </div>
        </DynamicModuleLoader>
    );
};

ArticleDetailsPage.displayName = 'ArticleDetailsPage';

export default ArticleDetailsPage;
