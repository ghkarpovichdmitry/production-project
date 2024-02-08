import { classNames } from 'shared/lib/classNames/classNames';
import { memo, type ReactElement, useCallback } from 'react';
import { Select } from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
    className?: string
    value?: Country
    onChange?: (value: Country) => void
    readonly?: boolean
}

const optionsList = (Object.keys(Country) as Array<keyof typeof Country>).map((key) => ({
    value: Country[key],
    content: Country[key]
}));

export const CountrySelect = memo(({
    className,
    value,
    onChange,
    readonly
}: CountrySelectProps): ReactElement => {
    const { t } = useTranslation('profile');

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    return (
        <Select
            className={classNames('', {}, [className])}
            options={optionsList}
            label={t('Enter country')}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
            data-testid="country-select"
        />
    );
});

CountrySelect.displayName = 'CountrySelect';
