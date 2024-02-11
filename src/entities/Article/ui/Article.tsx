import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Article.module.scss';
import { useTranslation } from 'react-i18next';
import { type ReactElement } from 'react';

interface ArticleProps {
    className?: string
}

export const Article = ({ className }: ArticleProps): ReactElement => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.Article, {}, [className])}>
            {t('Article')}
        </div>
    );
};
