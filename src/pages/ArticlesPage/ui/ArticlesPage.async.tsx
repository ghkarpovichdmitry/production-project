import { lazy } from 'react';

const ArticlesPageAsync = lazy(async () => await new Promise((resolve) => {
    // @ts-expect-error TODO - find out how to fix it later
    setTimeout(() => { resolve(import('./ArticlesPage')); }, 1500);
}));

export {
    ArticlesPageAsync
};
