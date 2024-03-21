import { useTranslation } from 'react-i18next';
import { type ReactElement } from 'react';
import { Page } from 'shared/ui/Page/Page';

const AboutPage = (): ReactElement => {
    const { t } = useTranslation('aboutUsPage');

    return (
        <Page>
            <h1>{t('About Us')}</h1>
            <h2>{t('Welcome to React')}</h2>
            <h2>{t('Test translation')}</h2>
        </Page>
    );
};

AboutPage.displayName = 'AboutPage';

export default AboutPage;
