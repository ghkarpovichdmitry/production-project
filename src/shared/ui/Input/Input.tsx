import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';
import {
    type ChangeEvent,
    type InputHTMLAttributes,
    type ReactElement,
    memo,
    useState, useEffect, useRef
} from 'react';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends HTMLInputProps {
    className?: string
    value?: string
    onChange?: (value: string) => void
    autofocus?: boolean
}

export const Input = memo((props: InputProps): ReactElement => {
    const {
        type = 'text',
        value,
        onChange,
        className,
        placeholder,
        autoFocus,
        autofocus,
        ...otherProps
    } = props;
    const ref = useRef<HTMLInputElement>(null);
    const [_, setIsFocused] = useState(false);

    useEffect(() => {
        if (autofocus) {
            setIsFocused(true);
            ref.current?.focus();
        }
        return () => { setIsFocused(false); };
    }, [autofocus]);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
        onChange?.(e.target.value);
    };

    const onFocus = (): void => { setIsFocused(true); };
    const onBlur = (): void => { setIsFocused(false); };

    return (
        <div className={classNames(cls.InputWrapper, {}, [className])}>
            {placeholder && (
                <div className={cls.placeholder}>
                    {`${placeholder}>`}
                </div>)
            }
            <input
                type={type}
                ref={ref}
                autoFocus={autoFocus}
                onFocus={onFocus}
                onBlur={onBlur}
                className={cls.input}
                value={value}
                onChange={handleInputChange}
                {...otherProps}
            />
        </div>
    );
});
