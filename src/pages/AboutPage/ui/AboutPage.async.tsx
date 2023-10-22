import { lazy } from 'react';

const AboutPageAsync = lazy(async () => await new Promise((resolve) => {
    // @ts-expect-error TODO - find out how to fix it later
    setTimeout(() => { resolve(import('./AboutPage')); }, 1500);
}));

export {
    AboutPageAsync
};
