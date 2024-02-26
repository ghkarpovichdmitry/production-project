import type { Meta, StoryObj } from '@storybook/react';
import { Text, TextSize, TextTheme } from './Text';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta = {
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
};

export default meta;
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

export const TextDark: Story = {
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

export const TextViolet: Story = {
    args: {
        text: 'Text example',
        theme: TextTheme.PRIMARY
    },
    decorators: [ThemeDecorator(Theme.VIOLET)]
};

export const ErrorTextViolet: Story = {
    args: {
        text: 'Text example',
        theme: TextTheme.ERROR
    },
    decorators: [ThemeDecorator(Theme.VIOLET)]
};

export const TextWithTitle: Story = {
    args: {
        title: 'Title example',
        text: 'Text example',
        theme: TextTheme.PRIMARY
    },
    decorators: [ThemeDecorator(Theme.LIGHT)]
};

export const TextWithTitleDark: Story = {
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

export const TextSizeM: Story = {
    args: {
        title: 'Title example',
        text: 'Text example',
        size: TextSize.M
    },
    decorators: [ThemeDecorator(Theme.LIGHT)]
};

export const TextSizeL: Story = {
    args: {
        title: 'Title example',
        text: 'Text example',
        size: TextSize.L
    },
    decorators: [ThemeDecorator(Theme.LIGHT)]
};
