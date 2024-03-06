import { useCallback, useState } from 'react';

interface UseHoverBind {
    onMouseEnter: () => void
    onMouseLeave: () => void
}

type UseHoverResult = [boolean, UseHoverBind];

export const useHover = (): UseHoverResult => {
    const [isHover, setIsHover] = useState(false);

    const onMouseEnter = useCallback(() => {
        setIsHover(true);
    }, [setIsHover]);

    const onMouseLeave = useCallback(() => {
        setIsHover(false);
    }, [setIsHover]);

    return [
        isHover,
        {
            onMouseEnter,
            onMouseLeave
        }
    ];

    // return useMemo(() => [
    //     isHover,
    //     {
    //         onMouseEnter,
    //         onMouseLeave
    //     }
    // ], [isHover, onMouseEnter, onMouseLeave])
};
