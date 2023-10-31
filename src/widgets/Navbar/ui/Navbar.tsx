import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NavBar.module.scss';
import { type ReactElement, useState } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

interface NavBarProps {
    className?: string
}

export const Navbar = ({ className }: NavBarProps): ReactElement => {
    const [isAuthModal, setIsAuthModal] = useState(false);
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={ () => { setIsAuthModal(true); } }
            >
                {t('Login')}
            </Button>

            <Modal isOpen={isAuthModal} onClose={ () => { setIsAuthModal(false); } }>
                <p>{'Lorem ipsum dolor sit amete harum officia.'}</p>
            </Modal>
        </div>
    );
};
