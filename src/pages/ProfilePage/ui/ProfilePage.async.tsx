import { lazy } from 'react';

const ProfilePageAsync = lazy(async () => await new Promise((resolve) => {
    // @ts-expect-error TODO - find out how to fix it later
    setTimeout(() => { resolve(import('./ProfilePage')); }, 1500);
}));

export {
    ProfilePageAsync
};
