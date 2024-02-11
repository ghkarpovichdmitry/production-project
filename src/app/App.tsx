import { useTheme } from 'app/providers/ThemeProvider';
import { getUserIsInited, userActions } from 'entities/User';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { type ReactElement, Suspense, useEffect } from 'react';
import { Loader } from 'widgets/Loader/ui/Loader';

const App = (): ReactElement => {
    const { theme } = useTheme();
    const dispatch = useDispatch();
    const isInited = useSelector(getUserIsInited);

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={<Loader/>}>
                <Navbar/>
                <div className="content-page">
                    <Sidebar/>
                    {isInited && <AppRouter/>}
                </div>
            </Suspense>
        </div>
    );
};

export default App;
