import './styles/index.scss';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router/ui/AppRouter';
import { NavBar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { type ReactElement, Suspense } from 'react';
import { Component } from 'app/Component';

const App = (): ReactElement => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={<div>Loading...</div>}>
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
