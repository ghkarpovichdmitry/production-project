import { type ReactElement, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';
import { BugButton } from 'app/providers/ErrorBoundary/ui/BugButton';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routerConfig';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';

interface SidebarProps {
    className?: string
}

export const Sidebar = ({ className }: SidebarProps): ReactElement => {
    const [collapsed, setCollapsed] = useState(true);
    const { t } = useTranslation();

    const onToggle = (): void => {
        setCollapsed(prev => !prev);
    };

    return (
        <div
            data-testid='sidebar'
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <div className={cls.items}>
                <AppLink
                    to={RoutePath.main}
                    theme={AppLinkTheme.INVERTED}
                    className={cls.item}
                >
                    <MainIcon className={cls.icon} />
                    <span className={cls.link}>{t('Main page')}</span>
                </AppLink>
                <AppLink
                    to={RoutePath.about}
                    theme={AppLinkTheme.INVERTED}
                    className={cls.item}
                >
                    <AboutIcon className={cls.icon} />
                    <span className={cls.link}>{t('About us')}</span>
                </AppLink>
            </div>
            <Button
                data-testid={'sidebar-toggle'}
                onClick={onToggle}
                className={cls.collapsedBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                size={ButtonSize.L}
                square
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.switchers}>
                <BugButton className={
                    classNames(cls.throwErrorBtn, {}, [className, 'throwErrorBtn'])}
                />
                <ThemeSwitcher/>
                <LangSwitcher className={cls.lang} short={collapsed}/>
            </div>
        </div>
    );
};
