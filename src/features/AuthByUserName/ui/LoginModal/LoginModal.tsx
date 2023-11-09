import { LoginForm } from '../LoginForm/LoginForm';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import cls from './LoginModal.module.scss';
import { type ReactElement } from 'react';

interface LoginModalProps {
    className?: string
    isOpen: boolean
    onClose?: () => void
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps): ReactElement => {
    return (
        <Modal
            className={classNames(cls.LoginModal, {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
            lazy={true}
        >
            <LoginForm />
        </Modal>
    );
};
