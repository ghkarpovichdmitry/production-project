import { type Meta } from '@storybook/blocks';
import type { StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { AppLink, AppLinkTheme } from './AppLink';

const meta: Meta<typeof AppLink> = {
    component: AppLink,
    title: 'shared/AppLink',
    parameters: {
        layout: 'fullscreen'
    },
    args: {
        to: '/'
    },
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryLight: Story = {
    args: {
        theme: AppLinkTheme.PRIMARY,
        children: 'Primary link'
    },
    decorators: [ThemeDecorator(Theme.LIGHT)]
};

export const PrimaryDark: Story = {
    args: {
        theme: AppLinkTheme.PRIMARY,
        children: 'Primary link'
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const SecondaryLight: Story = {
    args: {
        theme: AppLinkTheme.INVERTED,
        children: 'Secondary link'
    },
    decorators: [ThemeDecorator(Theme.LIGHT)]
};

export const SecondaryDark: Story = {
    args: {
        theme: AppLinkTheme.INVERTED,
        children: 'Secondary link'
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};
