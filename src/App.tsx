import React, {Suspense, useContext, useState} from 'react';
import './styles/index.scss';
import {Link, Route, Routes} from 'react-router-dom';
import MainPageAsync from "./pages/MainPage/MainPage.async";
import AboutPageAsync from "./pages/AboutPage/AboutPage.async";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";

const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Link to={'/'}>Main page</Link>
            <Link to={'/about'}>About us</Link>
            <button onClick={toggleTheme}>Toggle theme</button>

            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageAsync/>}/>
                    <Route path={'/'} element={<MainPageAsync/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;