import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { SidebarItem } from './SidebarItem';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { RoutePath } from 'shared/config/routeConfig/routerConfig';
import MainIcon from 'shared/assets/icons/main-20-20.svg';

const meta: Meta = {
    component: SidebarItem,
    title: 'widgets/SidebarItem',
    parameters: {
        layout: 'fullscreen'
    },
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof SidebarItem>;

export const Light: Story = {
    args: {
        item: {
            text: 'Sidebar menu 1',
            path: RoutePath.main,
            Icon: MainIcon,
            authOnly: false
        },
        collapsed: false,
    },
    decorators: [
        ThemeDecorator(Theme.LIGHT),
        StoreDecorator({})
    ]
};

export const Dark: Story = {
    args: {
        item: {
            text: 'Sidebar menu 2',
            path: RoutePath.main,
            Icon: MainIcon,
            authOnly: false
        },
        collapsed: false,
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({})
    ]
};

export const LightCollapsed: Story = {
    args: {
        item: {
            text: 'Sidebar menu 3',
            path: RoutePath.main,
            Icon: MainIcon,
            authOnly: false
        },
        collapsed: true,
    },
    decorators: [
        ThemeDecorator(Theme.LIGHT),
        StoreDecorator({})
    ]
};

export const DarkCollapsed: Story = {
    args: {
        item: {
            text: 'Sidebar menu 4',
            path: RoutePath.main,
            Icon: MainIcon,
            authOnly: false
        },
        collapsed: true,
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({})
    ]
};
