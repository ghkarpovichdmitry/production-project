import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';
import { type CSSProperties, type ReactElement, useMemo } from 'react';
// import user from '../../assets/img/user.jpg';

interface AvatarProps {
    className?: string
    src?: string
    size?: number
    alt?: string
}

export const Avatar = ({
    className,
    src,
    size,
    alt
}: AvatarProps): ReactElement => {
    const styles = useMemo<CSSProperties>(() => ({
        height: size || 100,
        width: size || 100
    }), [size]);

    return (
        <img
            // src={src || user}
            src={src}
            alt={alt}
            style={styles}
            className={classNames(cls.Avatar, {}, [className])}
        />
    );
};
