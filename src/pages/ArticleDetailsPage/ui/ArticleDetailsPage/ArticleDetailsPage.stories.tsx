import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import ArticleDetailsPage from './ArticleDetailsPage';

const meta: Meta = {
    component: ArticleDetailsPage,
    title: '/ArticleDetailsPage',
    parameters: {
        layout: 'fullscreen'
    },
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof ArticleDetailsPage>;

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
