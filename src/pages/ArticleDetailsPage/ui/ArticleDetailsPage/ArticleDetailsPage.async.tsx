import { lazy } from 'react';

const ArticleDetailsPageAsync = lazy(async () => await new Promise((resolve) => {
    // @ts-expect-error TODO - find out how to fix it later
    setTimeout(() => { resolve(import('./ArticleDetailsPage')); }, 400);
}));

export {
    ArticleDetailsPageAsync
};
