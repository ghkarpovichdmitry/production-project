import { useTheme } from 'app/providers/ThemeProvider';
import { userActions } from 'entities/User/index';
import { useDispatch } from 'react-redux';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router/ui/AppRouter';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { type ReactElement, Suspense, useEffect } from 'react';
import { Loader } from 'widgets/Loader/ui/Loader';

const App = (): ReactElement => {
    const { theme } = useTheme();
    const dispatch = useDispatch();

    useEffect(() => {
        const userData = localStorage.getItem(USER_LOCALSTORAGE_KEY);
        userData && dispatch(userActions.initAuthData(JSON.parse(userData)));
    }, [dispatch]);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={<Loader/>}>
                <Navbar/>
                <div className="content-page">
                    <Sidebar />
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    );
};

export default App;
