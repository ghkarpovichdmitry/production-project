import { classNames, type Mods } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';
import { type ChangeEvent, memo, type ReactElement, useCallback, useMemo } from 'react';

export interface SelectOption {
    value: string
    content: string
}

interface SelectProps {
    className?: string
    label?: string
    options?: SelectOption[]
    value?: string
    onChange?: (value: string) => void
    readonly?: boolean
}

export const Select = memo(({
    className,
    label,
    options,
    value,
    onChange,
    readonly,
    ...otherProps
}: SelectProps): ReactElement => {
    const mods: Mods = {};

    const onChangeHandler = useCallback((e: ChangeEvent<HTMLSelectElement>): void => {
        onChange?.(e.target.value);
    }, [onChange]);

    const optionsList = useMemo(() => {
        return options?.map((opt: SelectOption) => (
            <option
                key={opt.value}
                value={opt.value}
                className={cls.option}
                role='option'
            >
                {opt.content}
            </option>
        ));
    }, [options]);

    return (
        <div className={classNames(cls.Wrapper, mods, [className])}>
            {label && <span className={cls.label}>{label}</span>}
            <select
                className={`${cls.select} select-element`}
                value={value}
                onChange={onChangeHandler}
                disabled={readonly}
                {...otherProps}
            >
                {optionsList}
            </select>
        </div>
    );
});

Select.displayName = 'Select';
