import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NotFoundPage.module.scss';
import { type ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

interface NotFoundPageProps {
    className?: string
}

export const NotFoundPage = ({ className }: NotFoundPageProps): ReactElement => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.NotFoundPage, {}, [className])}>
            <h1>{t('Page not found')}</h1>
        </div>
    );
};
