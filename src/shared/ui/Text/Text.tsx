import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';
import { memo, type ReactElement } from 'react';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error'
}

export enum TextAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center'
}

interface TextProps {
    className?: string
    title?: string
    text?: string
    theme?: TextTheme
    align?: TextAlign
}

export const Text = memo((props: TextProps): ReactElement => {
    const {
        className,
        title,
        text,
        theme = TextTheme.PRIMARY,
        align = TextAlign.LEFT
    } = props;

    return (
        <div className={classNames(cls.text, {}, [className, cls[align], cls[theme]])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.title}>{text}</p>}
        </div>
    );
});

Text.displayName = 'Text';
