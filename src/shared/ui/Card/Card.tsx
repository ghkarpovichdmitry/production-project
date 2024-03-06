import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Card.module.scss';
import { type ReactElement, memo, type ReactNode, type HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string
    children: ReactNode
}

export const Card = memo(({
    className,
    children,
    ...otherProps
}: CardProps): ReactElement => {
    return (
        <div
            className={classNames(cls.Card, {}, [className])}
            {...otherProps}
        >
            {children}
        </div>
    );
});

Card.displayName = 'Card';
