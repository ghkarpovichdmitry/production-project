import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeSwitcher } from './ThemeSwitcher';

const meta: Meta = {
    component: ThemeSwitcher,
    title: 'widgets/ThemeSwitcher',
    parameters: {
        layout: 'fullscreen'
    },
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof ThemeSwitcher>;

export const Normal: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT)]
};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const Violet: Story = {
    decorators: [ThemeDecorator(Theme.VIOLET)]
};
