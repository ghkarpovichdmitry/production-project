import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { NotFoundPage } from './NotFoundPage';

export default {
    component: NotFoundPage,
    title: 'pages/NotFoundPage',
    parameters: {
        layout: 'fullscreen'
    },
    tags: ['autodocs']
} as Meta;
type Story = StoryObj<typeof NotFoundPage>;

export const Normal: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT)]
};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)]
};
