import { useTranslation } from 'react-i18next';
import { type ReactElement } from 'react';

const MainPage = (): ReactElement => {
    const { t } = useTranslation('mainPage');

    return (
        <div>
            <h1>{t('Main Page')}</h1>
        </div>
    );
};

export default MainPage;
