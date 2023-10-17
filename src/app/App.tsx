import './styles/index.scss';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router/ui/AppRouter';
import { NavBar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { type ReactElement, Suspense } from 'react';
import { Component } from 'app/Component';
import { useTranslation } from 'react-i18next';

const App = (): ReactElement => {
    const { theme } = useTheme();
    const { t } = useTranslation();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={<div>{t('Loading')}</div>}>
                <NavBar/>
                <Component/>
                <div className="content-page">
                    <Sidebar />
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    );
};

export default App;
