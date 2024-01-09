import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { AppLink, AppLinkTheme } from './AppLink';

export default {
    component: AppLink,
    title: 'shared/AppLink',
    parameters: {
        layout: 'fullscreen'
    },
    args: {
        to: '/'
    },
    tags: ['autodocs']
} as Meta;
type Story = StoryObj<typeof AppLink>;

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
