import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetails.module.scss';
import { useTranslation } from 'react-i18next';
import { memo, type ReactElement, useCallback, useEffect } from 'react';
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading
} from '../../model/selectors/articleDetailsSelectors';
import { fetchArticleById } from '../../model/services/fetchArticleById';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Text, TextAlign, TextSize, TextTheme } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import EyeIcon from 'shared/assets/icons/ant-design_eye-outlined.svg';
import CalendarIcon from 'shared/assets/icons/clarity_date-line.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import {
    type ArticleBlock,
    ArticleBlockType
} from '../../model/types/Article';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';

interface ArticleDetailsProps {
    className?: string
    id: string
}

const initialReducers: ReducersList = {
    articleDetails: articleDetailsReducer
};

export const ArticleDetails = memo(({
    className,
    id
}: ArticleDetailsProps): ReactElement => {
    const { t } = useTranslation('articleDetails');
    const dispatch = useAppDispatch();
    const article = useSelector(getArticleDetailsData);
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const error = useSelector(getArticleDetailsError);
    let content;

    /* eslint-disable indent */
    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
            case ArticleBlockType.TEXT:
                return <ArticleTextBlockComponent key={block.id} className={cls.block} block={block}/>;
            case ArticleBlockType.IMAGE:
                return <ArticleImageBlockComponent key={block.id} className={cls.block} block={block}/>;
            case ArticleBlockType.CODE:
                return <ArticleCodeBlockComponent key={block.id} className={cls.block} block={block}/>;
            default:
                return null;
        }
    }, []);
    /* eslint-enable indent */

    useEffect(() => {
        if (_PROJECT_ !== 'storybook') {
            dispatch(fetchArticleById(id));
        }
    }, [dispatch, id]);

    if (isLoading) {
        content = (
            <>
                <Skeleton className={cls.avatar} width={200} height={200} border="50%"/>
                <Skeleton className={cls.title} width={300} height={32}/>
                <Skeleton className={cls.skeleton} width={600} height={24}/>
                <Skeleton className={cls.skeleton} width="100%" height={200}/>
                <Skeleton className={cls.skeleton} width="100%" height={200}/>
            </>
        );
    } else {
        if (error) {
            content = (
                <Text
                    align={TextAlign.CENTER}
                    theme={TextTheme.ERROR}
                    title={t('An error occurred while the page was loading')}
                />
            );
        } else {
            content = (
                <>
                    <div className={cls.avatarWrapper}>
                        <Avatar src={article?.img} size={200} className={cls.avatar}/>
                    </div>
                    <Text
                        title={article?.title}
                        text={article?.subtitle}
                        size={TextSize.M}
                    />
                    <div className={cls.articleInfo}>
                        <Icon Svg={EyeIcon} className={cls.icon}/>
                        <Text
                            text={String(article?.views)}
                        />
                    </div>
                    <div className={cls.articleInfo}>
                        <Icon Svg={CalendarIcon} className={cls.icon}/>
                        <Text
                            text={article?.createdAt}
                        />
                    </div>
                    {article?.blocks.map(renderBlock)}
                </>
            );
        }
    }

    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount={true}>
            <div className={classNames(cls.ArticleDetails, {}, [className])}>
                {content}
            </div>
        </DynamicModuleLoader>
    );
});

ArticleDetails.displayName = 'ArticleDetails';
