import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ErrorPage } from 'widgets/ErrorPage';

const meta: Meta = {
    component: ErrorPage,
    title: 'widgets/ErrorPage',
    parameters: {
        layout: 'fullscreen'
    },
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof ErrorPage>;

export const Light: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT)]
};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const Violet: Story = {
    decorators: [ThemeDecorator(Theme.VIOLET)]
};
