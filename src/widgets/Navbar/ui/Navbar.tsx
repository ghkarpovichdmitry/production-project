import { LoginModal } from 'features/AuthByUserName/index';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NavBar.module.scss';
import { type ReactElement, useCallback, useState } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

interface NavBarProps {
    className?: string
}

export const Navbar = ({ className }: NavBarProps): ReactElement => {
    const [isAuthModal, setIsAuthModal] = useState(false);
    const { t } = useTranslation();

    const onCloseModal = useCallback((): void => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback((): void => {
        setIsAuthModal(true);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={onShowModal}
            >
                {t('Login')}
            </Button>
            <LoginModal isOpen={isAuthModal} onClose={onCloseModal}/>
        </div>
    );
};
