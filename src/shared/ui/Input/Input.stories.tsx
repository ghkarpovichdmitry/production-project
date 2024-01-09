import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
    component: Input,
    title: 'shared/Input',
    parameters: {
        layout: 'fullscreen'
    },
    tags: ['autodocs']
} as Meta;
type Story = StoryObj<typeof Input>;

export const Empty: Story = {
    args: {
        type: 'text'
    },
    decorators: [ThemeDecorator(Theme.LIGHT)]
};

export const WithValue: Story = {
    args: {
        type: 'text',
        value: 'Input value'
    },
    decorators: [ThemeDecorator(Theme.LIGHT)]
};

export const EmptyOnDarkBackground: Story = {
    args: {
        type: 'text'
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const WithValueOnDarkBackground: Story = {
    args: {
        type: 'text',
        value: 'Input value'
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const EmptyWithPlaceholder: Story = {
    args: {
        type: 'text',
        placeholder: 'Input placeholder'
    },
    decorators: [ThemeDecorator(Theme.LIGHT)]
};

export const EmptyWithPlaceholderOnDarkBackground: Story = {
    args: {
        type: 'text',
        placeholder: 'Input placeholder'
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const WithValueWithPlaceholder: Story = {
    args: {
        type: 'text',
        value: 'Input value',
        placeholder: 'Input placeholder'
    },
    decorators: [ThemeDecorator(Theme.LIGHT)]
};

export const WithValueWithPlaceholderOnDarkBackground: Story = {
    args: {
        type: 'text',
        value: 'Input value',
        placeholder: 'Input placeholder'
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};
