import { Button } from 'shared/ui/Button/Button';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface BugButtonProps {
    className?: string
}

// => Component for errors testing
export const BugButton = (props: BugButtonProps): any => {
    const [pageError, setPageError] = useState(false);
    const { t } = useTranslation();

    const runError = (): void => { setPageError(true); };

    useEffect(() => {
        if (pageError) {
            throw new Error('Page error');
        }
    }, [pageError]);

    return (
        <Button onClick={runError} className={props.className}>
            {t('Throw error')}
        </Button>
    );
};
