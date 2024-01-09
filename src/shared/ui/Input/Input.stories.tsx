import { type Meta } from '@storybook/blocks';
import type { StoryObj } from '@storybook/react';
import { Input } from './Input';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof Input> = {
    component: Input,
    title: 'shared/Input',
    parameters: {
        layout: 'fullscreen'
    },
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof meta>;

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
