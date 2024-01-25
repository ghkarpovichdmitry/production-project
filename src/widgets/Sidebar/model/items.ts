import type React from 'react';
import { RoutePath } from 'shared/config/routeConfig/routerConfig';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import ProfileIcon from 'shared/assets/icons/profile-icon.svg';

export interface SidebarItemType {
    text: string
    path: string
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const SidebarItemsList: SidebarItemType[] = [
    {
        text: 'Main page',
        path: RoutePath.main,
        Icon: MainIcon
    },
    {
        text: 'About us',
        path: RoutePath.about,
        Icon: AboutIcon
    },
    {
        text: 'Profile',
        path: RoutePath.profile,
        Icon: ProfileIcon
    }
];
