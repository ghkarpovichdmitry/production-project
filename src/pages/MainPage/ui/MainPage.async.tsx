import { lazy } from 'react';

const MainPageAsync = lazy(async () => await new Promise(resolve => {
    // @ts-expect-error TODO - find out how to fix it later
    setTimeout(() => { resolve(import('./MainPage')); }, 1500);
}));

export {
    MainPageAsync
};
