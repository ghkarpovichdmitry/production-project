import { type MutableRefObject, useCallback, useRef } from 'react';

export default function useDebounce (callback: (...args: any) => void, delay: number): () => void {
    const timer = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

    const debouncedCallback = useCallback((...args) => {
        if (timer.current) {
            clearTimeout(timer.current);
        }

        timer.current = setTimeout(() => {
            // callback(...args);
            console.log(callback, args);
        }, delay);
    }, [callback, delay]);

    return debouncedCallback;
}
