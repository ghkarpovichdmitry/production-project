import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleListItem.module.scss';
import { memo, type ReactElement, useCallback } from 'react';
import { type Article, ArticleBlockType, type ArticleTextBlock, ArticleView } from '../../model/types/Article';
import { Text } from 'shared/ui/Text/Text';
import { Icon } from 'shared/ui/Icon/Icon';
import EyeIcon from 'shared/assets/icons/ant-design_eye-outlined.svg';
import { Card } from 'shared/ui/Card/Card';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { useNavigate } from 'react-router';
import { RoutePath } from 'shared/config/routeConfig/routerConfig';

interface ArticleListItemProps {
    className?: string
    article: Article
    view: ArticleView
}

export const ArticleListItem = memo(({
    className,
    article,
    view
}: ArticleListItemProps): ReactElement => {
    const { t } = useTranslation('articlesPage');
    const navigate = useNavigate();

    const types = <Text text={article.type.join(', ')} className={cls.types}/>;
    const image = <img src={article.img} alt={article.title} className={cls.img}/>;
    const date = <Text text={article.createdAt} className={cls.date}/>;
    const title = <Text title={article.title} className={cls.title}/>;
    const views = (<>
        <Text text={String(article.views)} className={cls.views}/>
        <Icon Svg={EyeIcon} className={cls.icon}/>
    </>);

    const openArticle = useCallback(() => {
        navigate(RoutePath.article_details + article.id);
    }, [article.id, navigate]);

    if (view === ArticleView.BIG) {
        const textBlock = article.blocks.find(block => block.type === ArticleBlockType.TEXT) as ArticleTextBlock;

        return (
            <div className={classNames('', {}, [className, cls[view]])}>
                <Card>
                    <div className={cls.header}>
                        <Avatar size={30} src={article.user.avatar} alt={article.title}/>
                        <Text text={article.user.username} className={cls.username}/>
                        {date}
                    </div>
                    {title}{types}{image}
                    {textBlock && (
                        <ArticleTextBlockComponent block={textBlock} className={cls.textBlock}/>
                    )}
                    <div className={cls.footer}>
                        <Button
                            theme={ButtonTheme.OUTLINE}
                            onClick={openArticle}
                        >
                            {t('Read more...')}
                        </Button>
                        {views}
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div className={classNames('', {}, [className, cls[view]])}>
            <Card>
                <div className={cls.imageWrapper} onClick={openArticle}>{image}{date}</div>
                <div className={cls.infoWrapper}>{types}{views}</div>
                {title}
            </Card>
        </div>
    );
});

ArticleListItem.displayName = 'ArticleListItem';
