import { type MutableRefObject, useEffect } from 'react';

export interface UseInfiniteScrollOptions {
    callback?: () => void
    triggerRef: MutableRefObject<HTMLElement>
    wrapperRef: MutableRefObject<HTMLElement>
}

export const useInfiniteScroll = ({
    wrapperRef,
    triggerRef,
    callback
}: UseInfiniteScrollOptions): void => {
    useEffect(() => {
        let observer: IntersectionObserver | null = null;

        if (callback) {
            const options = {
                root: wrapperRef.current,
                rootMargin: '0px',
                threshold: 1.0
            };

            observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    callback();
                }
            }, options);

            observer.observe(triggerRef.current);
        }

        return () => {
            if (observer) {
                // observer.unobserve(triggerRef.current); // if specific element should be unobserved
                observer.disconnect();
            }
        };
    }, [triggerRef, wrapperRef, callback]);
};
