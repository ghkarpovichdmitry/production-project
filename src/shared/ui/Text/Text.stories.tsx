import type { Meta, StoryObj } from '@storybook/react';
import { Text, TextTheme } from './Text';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
    component: Text,
    title: 'shared/Text',
    parameters: {
        layout: 'fullscreen'
    },
    args: {
        text: 'Text example',
        theme: TextTheme.PRIMARY
    },
    tags: ['autodocs']
} as Meta;
type Story = StoryObj<typeof Text>;

export const PrimaryText: Story = {
    args: {
        text: 'Text example',
        theme: TextTheme.PRIMARY
    },
    decorators: [ThemeDecorator(Theme.LIGHT)]
};

export const ErrorText: Story = {
    args: {
        text: 'Text example',
        theme: TextTheme.ERROR
    },
    decorators: [ThemeDecorator(Theme.LIGHT)]
};

export const PrimaryTextDark: Story = {
    args: {
        text: 'Text example',
        theme: TextTheme.PRIMARY
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const ErrorTextDark: Story = {
    args: {
        text: 'Text example',
        theme: TextTheme.ERROR
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const PrimaryTextWithTitle: Story = {
    args: {
        title: 'Title example',
        text: 'Text example',
        theme: TextTheme.PRIMARY
    },
    decorators: [ThemeDecorator(Theme.LIGHT)]
};

export const PrimaryTextWithTitleDark: Story = {
    args: {
        title: 'Title example',
        text: 'Text example',
        theme: TextTheme.PRIMARY
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const ErrorTextWithTitle: Story = {
    args: {
        title: 'Title example',
        text: 'Text example',
        theme: TextTheme.ERROR
    },
    decorators: [ThemeDecorator(Theme.LIGHT)]
};

export const ErrorTextWithTitleDark: Story = {
    args: {
        title: 'Title example',
        text: 'Text example',
        theme: TextTheme.ERROR
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};
