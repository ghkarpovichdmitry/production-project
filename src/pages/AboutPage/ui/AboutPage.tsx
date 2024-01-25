import { useTranslation } from 'react-i18next';
import { type ReactElement, memo } from 'react';

const AboutPage = memo((): ReactElement => {
    const { t } = useTranslation('aboutUsPage');

    return (
        <div>
            <h1>{t('About Us')}</h1>
            <h2>{t('Welcome to React')}</h2>
            <h2>{t('Test translation')}</h2>
        </div>
    );
});

AboutPage.displayName = 'AboutPage';

export default AboutPage;
