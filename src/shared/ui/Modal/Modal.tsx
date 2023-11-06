import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Modal.module.scss';
import {
    type ReactElement, type MouseEvent,
    useState, useRef, useEffect, useCallback
} from 'react';
import { Portal } from 'shared/ui/Portal/Portal';

export interface ModalProps {
    className?: string
    children: ReactElement
    isOpen?: boolean
    onClose?: () => void
}

const ANIMATION_DELAY = 300;

const Modal = (props: ModalProps): ReactElement => {
    const { className, children, isOpen, onClose } = props;
    const [isClosing, setIsClosing] = useState(false);
    const timerRef = useRef<number>();

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing
    };

    const onContentClick = (e: MouseEvent): any => {
        e.stopPropagation();
    };

    const closeHandler = useCallback((): void => {
        setIsClosing(true);
        timerRef.current = window.setTimeout(() => {
            if (onClose) {
                onClose();
                setIsClosing(false);
            }
        }, ANIMATION_DELAY);
    }, [onClose]);

    const onKeyDown = useCallback((e: KeyboardEvent): void => {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }
        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, closeHandler, onKeyDown]);

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <div className={cls.overlay} onClick={closeHandler}>
                    <div className={cls.content} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};

export {
    Modal
};
