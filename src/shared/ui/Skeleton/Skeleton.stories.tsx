import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Skeleton } from './Skeleton';

const meta: Meta = {
    component: Skeleton,
    title: 'shared/Skeleton',
    parameters: {
        layout: 'fullscreen'
    },
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const PrimaryLight: Story = {
    args: {
        width: '100%',
        height: 200
    },
    decorators: [ThemeDecorator(Theme.LIGHT)]
};

export const PrimaryDark: Story = {
    args: {
        width: '100%',
        height: 200
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const PrimaryViolet: Story = {
    args: {
        width: '100%',
        height: 200
    },
    decorators: [ThemeDecorator(Theme.VIOLET)]
};

export const CircleLight: Story = {
    args: {
        height: 100,
        width: 100,
        border: '50%'
    },
    decorators: [ThemeDecorator(Theme.LIGHT)]
};

export const CircleDark: Story = {
    args: {
        height: 100,
        width: 100,
        border: '50%'
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const CircleViolet: Story = {
    args: {
        height: 100,
        width: 100,
        border: '50%'
    },
    decorators: [ThemeDecorator(Theme.VIOLET)]
};
