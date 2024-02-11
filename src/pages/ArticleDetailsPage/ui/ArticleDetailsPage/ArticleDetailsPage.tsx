import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetailsPage.module.scss';
import { useTranslation } from 'react-i18next';
import { memo, type ReactElement } from 'react';

interface ArticleDetailsPageProps {
    className?: string
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps): ReactElement => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
            <h1>{t('Article details page')}</h1>
        </div>
    );
};

ArticleDetailsPage.displayName = 'ArticleDetailsPage';

export default memo(ArticleDetailsPage);
