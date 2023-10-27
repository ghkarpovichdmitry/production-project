import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NavBar.module.scss';
import { type ReactElement } from 'react';

interface NavBarProps {
    className?: string
}

export const Navbar = ({ className }: NavBarProps): ReactElement => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                /
            </div>
        </div>
    );
};
