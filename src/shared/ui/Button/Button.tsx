import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';
import { type ButtonHTMLAttributes, type FC } from 'react';

export enum ThemeButton {
    CLEAR = 'clear',
    OUTLINE = 'outline',
}

export enum TypeButton {
    BUTTON = 'button',
    RESET = 'reset',
    SUBMIT = 'submit',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ThemeButton
    type?: TypeButton
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        type = TypeButton.BUTTON,
        children,
        theme,
        ...otherProps
    } = props;
    return (
        <button
            type={type}
            className={classNames(cls.Button, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
