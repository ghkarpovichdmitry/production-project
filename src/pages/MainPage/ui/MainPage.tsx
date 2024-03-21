import { useTranslation } from 'react-i18next';
import { type ReactElement } from 'react';
import { Counter } from 'entities/Counter';
import { Page } from 'shared/ui/Page/Page';

const MainPage = (): ReactElement => {
    const { t } = useTranslation('mainPage');

    return (
        <Page>
            <h1>{t('Main Page')}</h1>
            <Counter/>
        </Page>
    );
};

export default MainPage;
