import { useTranslation } from 'react-i18next';
import { type ReactElement } from 'react';

const AboutPage = (): ReactElement => {
    const { t } = useTranslation('aboutUsPage');

    return (
        <div>
            <h1>{t('About Us')}</h1>
        </div>
    );
};

export default AboutPage;
