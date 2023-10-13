import {t} from "i18next";
import {useTranslation} from "react-i18next";

const AboutPage = () => {
    const {t} = useTranslation('aboutUsPage');

    return (
        <div>
            <h1>{t('About Us')}</h1>
        </div>
    );
};

export default AboutPage;