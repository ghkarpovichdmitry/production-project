import { type ReactElement, useState, memo, useMemo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';
import { BugButton } from 'app/providers/ErrorBoundary/ui/BugButton';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { SidebarItemsList } from '../../model/items';

interface SidebarProps {
    className?: string
}

export const Sidebar = memo(({ className }: SidebarProps): ReactElement => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = useCallback((): void => {
        setCollapsed(prev => !prev);
    }, [setCollapsed]);

    const itemsList = useMemo(() => (SidebarItemsList.map((item) => (
        <SidebarItem
            item={item}
            key={item.path}
            collapsed={collapsed}
        />
    ))), [collapsed]);

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <div className={cls.items}>
                {itemsList}
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
});

Sidebar.displayName = 'Sidebar';
