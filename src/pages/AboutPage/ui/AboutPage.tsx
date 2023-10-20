import { useTranslation } from 'react-i18next';
import { type ReactElement } from 'react';
import { Component } from 'app/Component';

const AboutPage = (): ReactElement => {
    const { t } = useTranslation('aboutUsPage');

    return (
        <div>
            <h1>{t('About Us')}</h1>
            <Component/>
        </div>
    );
};

export default AboutPage;
