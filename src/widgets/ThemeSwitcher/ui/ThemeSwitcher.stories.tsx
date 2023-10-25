import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeSwitcher } from './ThemeSwitcher';

const meta = {
    title: 'widgets/ThemeSwitcher',
    component: ThemeSwitcher,
    parameters: {
        layout: 'centered'
    }
} satisfies Meta<typeof ThemeSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT)]
};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)]
};
