import React, { memo, type ReactElement, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { type AppRoutesProps, routeConfig } from 'shared/config/routeConfig/routerConfig';
import { PageLoader } from 'widgets/PageLoader';
import { RequireAuth } from 'app/providers/router/ui/RequireAuth';
import { getUserAuthData } from 'entities/User';
import { useSelector } from 'react-redux';

const AppRouter = (): ReactElement => {
    const isAuth = useSelector(getUserAuthData);

    const renderWithRouter = useCallback((router: AppRoutesProps) => {
        const element = (<Suspense fallback={<PageLoader/>}>
            <div className="page-wrapper">
                {router.element}
            </div>
        </Suspense>);

        return (
            <Route
                key={router.path}
                path={router.path}
                element={router.authOnly && isAuth ? <RequireAuth>{element}</RequireAuth> : element}
            />
        ); // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // should render only once because of hidden routes

    return (
        <Routes>
            {Object.values(routeConfig).map(renderWithRouter)}
        </Routes>
    );
};

export default memo(AppRouter);
