import { type ReactElement, type ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    children: ReactNode
    element?: HTMLElement
}

export const Portal = (props: PortalProps): ReactElement => {
    const {
        children,
        element = document.body
    } = props;

    return createPortal(children, element);
};
