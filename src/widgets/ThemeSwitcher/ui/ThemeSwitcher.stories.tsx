import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeSwitcher } from './ThemeSwitcher';

export default {
    component: ThemeSwitcher,
    title: 'widgets/ThemeSwitcher',
    parameters: {
        layout: 'fullscreen'
    },
    tags: ['autodocs']
} as Meta;
type Story = StoryObj<typeof ThemeSwitcher>;

export const Normal: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT)]
};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)]
};
