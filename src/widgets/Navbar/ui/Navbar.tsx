import { getUserAuthData, userActions } from 'entities/User';
import { LoginModal } from 'features/AuthByUserName';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NavBar.module.scss';
import { type ReactElement, useCallback, useState, memo } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

interface NavBarProps {
    className?: string
}

export const Navbar = memo(({ className }: NavBarProps): ReactElement => {
    const [isAuthModal, setIsAuthModal] = useState(false);
    const { t } = useTranslation();
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();

    const onCloseModal = useCallback((): void => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback((): void => {
        setIsAuthModal(true);
    }, []);

    const onLogout = useCallback((): void => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (authData) {
        return (
            <div className={classNames(cls.Navbar, {}, [className])}>
                <Button
                    theme={ButtonTheme.CLEAR_INVERTED}
                    className={cls.links}
                    onClick={onLogout}
                >
                    {t('Logout')}
                </Button>
            </div>
        );
    }

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={onShowModal}
            >
                {t('Login')}
            </Button>
            {isAuthModal && (
                <LoginModal
                    isOpen={isAuthModal}
                    onClose={onCloseModal}
                />
            )}
        </div>
    );
});

Navbar.displayName = 'Navbar';
