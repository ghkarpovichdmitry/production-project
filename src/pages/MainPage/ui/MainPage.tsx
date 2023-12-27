import { useTranslation } from 'react-i18next';
import { type ReactElement } from 'react';
// import { Counter } from 'entities/Counter';

const MainPage = (): ReactElement => {
    const { t } = useTranslation('mainPage');

    return (
        <div>
            <h1>{t('Main Page')}</h1>
            {/* <Counter/> */}
        </div>
    );
};

export default MainPage;
