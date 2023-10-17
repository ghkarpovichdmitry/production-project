import { useTranslation } from 'react-i18next';
import { type ReactElement } from 'react';

interface ComponentProps {
    className?: string
}

export const Component = ({ className }: ComponentProps): ReactElement => {
    const { t } = useTranslation();

    return (
        <div className="">
            <h1>{t('Welcome to React')}</h1>
            <h2>{t('Test translation')}</h2>
        </div>
    );
};
