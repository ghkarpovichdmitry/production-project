import { useEffect } from 'react';

export const useInitialEffect = (callback: () => void, deps: any[]): void => {
    useEffect(() => {
        if (_PROJECT_ !== 'storybook') {
            callback();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [...deps]);
};
