import { type ReactElement, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary/ui/BugButton';
import { Button } from 'shared/ui/Button/Button';

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
            <Button data-testid={'sidebar-toggle'} onClick={onToggle}>{t('Toggle')}</Button>
            <div className={cls.switchers}>
                <BugButton className={
                    classNames(cls.throwErrorBtn, {}, [className, 'throwErrorBtn'])}
                />
                <ThemeSwitcher/>
                <LangSwitcher className={cls.lang}/>
            </div>
        </div>
    );
};
