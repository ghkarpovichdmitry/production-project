import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Select } from './Select';

const meta: Meta = {
    component: Select,
    title: 'shared/Select',
    parameters: {
        layout: 'fullscreen'
    },
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Select>;

export const PrimaryLight: Story = {
    args: {
        label: 'Please select',
        options: [
            { value: '1', content: 'First element' },
            { value: '2', content: 'Second element' },
            { value: '3', content: 'Third element' },
        ]
    },
    decorators: [ThemeDecorator(Theme.LIGHT)]
};

export const PrimaryDark: Story = {
    args: {
        label: 'Please select',
        options: [
            { value: '1', content: 'First element' },
            { value: '2', content: 'Second element' },
            { value: '3', content: 'Third element' },
        ]
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};
