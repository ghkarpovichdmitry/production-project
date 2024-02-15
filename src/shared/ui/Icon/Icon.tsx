import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Icon.module.scss';
import React, { type ReactElement } from 'react';

interface IconProps {
    className?: string
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const Icon = ({ className, Svg }: IconProps): ReactElement => {
    return (
        <Svg className={classNames(cls.Icon, {}, [className])}/>
    );
};
