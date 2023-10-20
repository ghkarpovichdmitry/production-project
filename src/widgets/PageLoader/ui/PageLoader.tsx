import { classNames } from 'shared/lib/classNames/classNames';
import cls from './PageLoader.module.scss';
import { type ReactElement } from 'react';
import { Loader } from 'widgets/Loader/Loader';

interface PageLoaderProps {
    className?: string
}

export const PageLoader = ({ className }: PageLoaderProps): ReactElement => {
    return (
        <div className={classNames(cls.PageLoader, {}, [className])}>
            <Loader/>
        </div>
    );
};
