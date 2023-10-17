import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NavBar.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { type ReactElement } from 'react';

interface NavBarProps {
    className?: string
}

export const NavBar = ({ className }: NavBarProps): ReactElement => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink
                    to={'/'}
                    className={cls.mainLink}
                    theme={AppLinkTheme.SECONDARY}
                >
                    {t('Main page')}
                </AppLink>
                <AppLink
                    to={'/about'}
                    theme={AppLinkTheme.SECONDARY}
                >
                    {t('About us')}
                </AppLink>
            </div>
        </div>
    );
};
