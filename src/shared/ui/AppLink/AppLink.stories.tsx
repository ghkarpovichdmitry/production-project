import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { AppLink, AppLinkTheme } from './AppLink';

const meta: Meta = {
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
type Story = StoryObj<typeof AppLink>;

export const Light: Story = {
    args: {
        theme: AppLinkTheme.PRIMARY,
        children: 'Primary link'
    },
    decorators: [ThemeDecorator(Theme.LIGHT)]
};

export const Dark: Story = {
    args: {
        theme: AppLinkTheme.PRIMARY,
        children: 'Primary link'
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const Violet: Story = {
    args: {
        theme: AppLinkTheme.PRIMARY,
        children: 'Primary link'
    },
    decorators: [ThemeDecorator(Theme.VIOLET)]
};

export const InvertedLight: Story = {
    args: {
        theme: AppLinkTheme.INVERTED,
        children: 'Secondary link'
    },
    decorators: [ThemeDecorator(Theme.LIGHT)]
};

export const InvertedDark: Story = {
    args: {
        theme: AppLinkTheme.INVERTED,
        children: 'Secondary link'
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const InvertedViolet: Story = {
    args: {
        theme: AppLinkTheme.INVERTED,
        children: 'Secondary link'
    },
    decorators: [ThemeDecorator(Theme.VIOLET)]
};
