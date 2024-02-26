import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta = {
    component: Input,
    title: 'shared/Input',
    parameters: {
        layout: 'fullscreen'
    },
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Empty: Story = {
    args: {
        type: 'text'
    },
    decorators: [ThemeDecorator(Theme.LIGHT)]
};

export const WithValueLight: Story = {
    args: {
        type: 'text',
        value: 'Input value'
    },
    decorators: [ThemeDecorator(Theme.LIGHT)]
};

export const EmptyDark: Story = {
    args: {
        type: 'text'
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const EmptyViolet: Story = {
    args: {
        type: 'text'
    },
    decorators: [ThemeDecorator(Theme.VIOLET)]
};

export const WithValueDark: Story = {
    args: {
        type: 'text',
        value: 'Input value'
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const WithValueViolet: Story = {
    args: {
        type: 'text',
        value: 'Input value'
    },
    decorators: [ThemeDecorator(Theme.VIOLET)]
};

export const EmptyWithPlaceholder: Story = {
    args: {
        type: 'text',
        placeholder: 'Input placeholder'
    },
    decorators: [ThemeDecorator(Theme.LIGHT)]
};

export const EmptyWithPlaceholderDark: Story = {
    args: {
        type: 'text',
        placeholder: 'Input placeholder'
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const EmptyWithPlaceholderViolet: Story = {
    args: {
        type: 'text',
        placeholder: 'Input placeholder'
    },
    decorators: [ThemeDecorator(Theme.VIOLET)]
};

export const WithValueWithPlaceholder: Story = {
    args: {
        type: 'text',
        value: 'Input value',
        placeholder: 'Input placeholder'
    },
    decorators: [ThemeDecorator(Theme.LIGHT)]
};

export const WithValueWithPlaceholderDark: Story = {
    args: {
        type: 'text',
        value: 'Input value',
        placeholder: 'Input placeholder'
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const WithValueWithPlaceholderViolet: Story = {
    args: {
        type: 'text',
        value: 'Input value',
        placeholder: 'Input placeholder'
    },
    decorators: [ThemeDecorator(Theme.VIOLET)]
};
