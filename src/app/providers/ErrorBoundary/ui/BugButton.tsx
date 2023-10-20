import { useEffect, useState } from 'react';

// => Component for errors testing
export const BugButton = (): any => {
    const [pageError, setPageError] = useState(false);

    const runError = (): void => { setPageError(true); };

    useEffect(() => {
        if (pageError) {
            throw new Error('Page error');
        }
    }, [pageError]);

    return (
        <div onClick={runError}>
            {'throw Error'}
        </div>
    );
};
