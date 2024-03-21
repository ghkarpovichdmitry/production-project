import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Page.module.scss';
import { type ReactElement, type ReactNode, useRef, type MutableRefObject } from 'react';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';

interface PageProps {
    className?: string
    children: ReactNode
    onScrollEnd?: () => void
}

export const Page = ({
    className,
    children,
    onScrollEnd
}: PageProps): ReactElement => {
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

    useInfiniteScroll({
        wrapperRef,
        triggerRef,
        callback: onScrollEnd
    });

    return (
        <section
            ref={wrapperRef}
            className={classNames(cls.Page, {}, [className])}
        >
            {children}
            <div ref={triggerRef}/>
        </section>
    );
};
