import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Skeleton.module.scss';
import { type ReactElement } from 'react';

interface SkeletonProps {
    className?: string
    height?: string | number
    width?: string | number
    border?: string
}

export const Skeleton = ({
    className,
    height,
    width,
    border
}: SkeletonProps): ReactElement => {
    const styles = {
        width,
        height,
        borderRadius: border
    };

    return (
        <div className={classNames(cls.Skeleton, {}, [className])} style={styles}/>
    );
};
