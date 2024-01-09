import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { PageError } from 'widgets/PageError';

export default {
    component: PageError,
    title: 'widgets/PageError',
    parameters: {
        layout: 'fullscreen'
    },
    tags: ['autodocs']
} as Meta;
type Story = StoryObj<typeof PageError>;

export const Light: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT)]
};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)]
};
