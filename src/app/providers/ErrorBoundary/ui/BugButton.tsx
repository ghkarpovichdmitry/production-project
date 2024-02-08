import { Button } from 'shared/ui/Button/Button';
import { type ReactElement, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface BugButtonProps {
    className?: string
}

// => Component for errors testing
export const BugButton = (props: BugButtonProps): ReactElement => {
    const [errorPage, setErrorPage] = useState(false);
    const { t } = useTranslation();

    const runError = (): void => { setErrorPage(true); };

    useEffect(() => {
        if (errorPage) {
            throw new Error('Page error');
        }
    }, [errorPage]);

    return (
        <Button onClick={runError} className={props.className}>
            {t('Throw error')}
        </Button>
    );
};
