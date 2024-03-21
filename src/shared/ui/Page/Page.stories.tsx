import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Page } from './Page';

const meta: Meta = {
    component: Page,
    title: 'shared/Page',
    parameters: {
        layout: 'fullscreen'
    },
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Page>;

export const PrimaryLight: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.LIGHT)]
};

export const PrimaryDark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const PrimaryViolet: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.VIOLET)]
};
