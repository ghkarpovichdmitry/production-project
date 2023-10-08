import React, {Suspense} from 'react';
import './styles/index.scss';
import {Link, Route, Routes} from 'react-router-dom';
import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";

const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Link to={'/'}>Main page</Link>
            <Link to={'/about'}>About us</Link>
            <button onClick={toggleTheme}>Toggle theme</button>

            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPage/>}/>
                    <Route path={'/'} element={<MainPage/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;