import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import ArticlesPage from './ArticlesPage';

const meta: Meta = {
    component: ArticlesPage,
    title: 'pages/ArticlesPage',
    parameters: {
        layout: 'fullscreen'
    },
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof ArticlesPage>;

export const Light: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.LIGHT)]
};

export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const Violet: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.VIOLET)]
};
