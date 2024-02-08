import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ErrorPage.module.scss';
import { type ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';

interface ErrorPageProps {
    className?: string
}

export const ErrorPage = ({ className }: ErrorPageProps): ReactElement => {
    const { t } = useTranslation();

    const reloadThePage = (): void => {
        location.reload();
    };

    return (
        <div className={classNames(cls.ErrorPage, {}, [className])}>
            <p>{t('Unexpected error')}</p>
            <Button onClick={reloadThePage}>{t('Refresh the page')}</Button>
        </div>
    );
};
