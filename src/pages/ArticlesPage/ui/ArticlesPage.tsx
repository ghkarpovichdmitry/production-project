import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlesPage.module.scss';
import { useTranslation } from 'react-i18next';
import { memo, type ReactElement } from 'react';

interface ArticlesPageProps {
    className?: string
}

const ArticlesPage = ({ className }: ArticlesPageProps): ReactElement => {
    const { t } = useTranslation('articlesPage');

    return (
        <div className={classNames(cls.ArticlesPage, {}, [className])}>
            <h1>{t('Articles page')}</h1>
        </div>
    );
};

ArticlesPage.displayName = 'ArticlesPage';

export default memo(ArticlesPage);
