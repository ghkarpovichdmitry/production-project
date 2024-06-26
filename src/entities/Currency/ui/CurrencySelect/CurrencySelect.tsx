import { classNames } from 'shared/lib/classNames/classNames';
import { memo, type ReactElement, useCallback } from 'react';
import { Select } from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';
import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
    className?: string
    value?: Currency
    onChange?: (value: Currency) => void
    readonly?: boolean
}

const optionsList = (Object.keys(Currency) as Array<keyof typeof Currency>).map((key) => ({
    value: Currency[key],
    content: Currency[key]
}));

export const CurrencySelect = memo(({
    className,
    value,
    onChange,
    readonly
}: CurrencySelectProps): ReactElement => {
    const { t } = useTranslation('profile');

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency);
    }, [onChange]);

    return (
        <Select
            className={classNames('', {}, [className])}
            options={optionsList}
            label={t('Enter currency')}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
            data-testid="currency-select"
        />
    );
});

CurrencySelect.displayName = 'CurrencySelect';
