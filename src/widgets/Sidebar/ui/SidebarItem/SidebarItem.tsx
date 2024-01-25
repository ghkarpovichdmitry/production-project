import cls from './SidebarItem.module.scss';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { type SidebarItemType } from 'widgets/Sidebar/model/items';
import { memo, type ReactElement } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

interface SidebarItemProps {
    item: SidebarItemType
    collapsed: boolean
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps): ReactElement => {
    const { t } = useTranslation();

    return (
        <AppLink
            to={item.path}
            theme={AppLinkTheme.INVERTED}
            className={classNames(cls.item, { [cls.collapsed]: collapsed })}
        >
            <item.Icon className={cls.icon} />
            <span className={cls.link}>{t(item.text)}</span>
        </AppLink>
    );
});

SidebarItem.displayName = 'SidebarItem';
