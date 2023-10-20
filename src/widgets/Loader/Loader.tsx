import { classNames } from 'shared/lib/classNames/classNames';
import './Loader.scss';
import { type ReactElement } from 'react';

interface LoaderProps {
    className?: string
}

export const Loader = ({ className }: LoaderProps): ReactElement => {
    return (
        <div className={classNames('loadingio-spinner-bean-eater-5qkg3f8g2yi', {}, [className])}>
            <div className="ldio-71p9c9c4u08">
                <div><div/><div/><div/></div>
                <div><div/><div/><div/></div>
            </div>
        </div>
    );
};
