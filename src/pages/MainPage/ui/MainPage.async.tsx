import { lazy } from 'react';

const MainPageAsync = lazy(async () => await new Promise((resolve) => {
    // @ts-expect-error TODO - find out how to fix it later
    setTimeout(() => { resolve(import('./MainPage')); }, 1500);
}));

export {
    MainPageAsync
};

// TODO change all the async files in this way without setTimeout
// import { lazy } from 'react';
// import type { ComponentType } from 'react';
//
// const MainPageAsync = lazy(async () => {
//     const module = await import('./MainPage');
//     return { default: module.default as ComponentType };
// });
//
// export { MainPageAsync };
