import { useCallback, useRef } from 'react';

export default function useThrottle (callback: (...args: any) => void, delay: number): () => void {
    const isThrottled = useRef<ReturnType<typeof setTimeout> | null | boolean>(null);

    const throttledCallback = useCallback((...args) => {
        if (isThrottled.current) {
            return;
        }

        callback(...args);
        isThrottled.current = true;
        window.setTimeout(() => {
            isThrottled.current = false;
        }, delay);
    }, [callback, delay]);

    return throttledCallback;
}
