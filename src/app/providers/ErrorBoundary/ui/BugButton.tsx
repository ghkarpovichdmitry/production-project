import { useEffect, useState } from 'react';

interface BugButtonProps {
    className: string
}

// => Component for errors testing
export const BugButton = (props: BugButtonProps): any => {
    const [pageError, setPageError] = useState(false);

    const runError = (): void => { setPageError(true); };

    useEffect(() => {
        if (pageError) {
            throw new Error('Page error');
        }
    }, [pageError]);

    return (
        <button onClick={runError} className={props.className}>
            {'throw Error'}
        </button>
    );
};
