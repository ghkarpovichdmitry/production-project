import { type Meta } from '@storybook/blocks';
import type { StoryObj } from '@storybook/react';
import { Text, TextTheme } from './Text';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof Text> = {
    component: Text,
    title: 'shared/Text',
    parameters: {
        layout: 'fullscreen'
    },
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof meta>;

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
