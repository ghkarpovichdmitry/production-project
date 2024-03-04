import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import { RoutePath } from 'shared/config/routeConfig/routerConfig';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import ProfileIcon from 'shared/assets/icons/profile-icon.svg';
import ArticleIcon from 'shared/assets/icons/article.svg';
import { type SidebarItemType } from '../types/sidebar';

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
    const sidebarItemsList: SidebarItemType[] = [
        {
            text: 'Main page',
            path: RoutePath.main,
            Icon: MainIcon
        },
        {
            text: 'About us',
            path: RoutePath.about,
            Icon: AboutIcon
        }
    ];

    if (userData) {
        sidebarItemsList.push(
            {
                text: 'Profile',
                path: RoutePath.profile + userData.id,
                Icon: ProfileIcon,
                authOnly: true
            },
            {
                text: 'Articles',
                path: RoutePath.articles,
                Icon: ArticleIcon,
                authOnly: true
            });
    }

    return sidebarItemsList;
});
