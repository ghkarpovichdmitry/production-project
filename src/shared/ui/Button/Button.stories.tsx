import type { Meta, StoryObj } from '@storybook/react';
import { Button, ThemeButton, TypeButton } from './Button';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
    title: 'shared/Button',
    component: Button,
    parameters: {
        layout: 'centered'
    }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'Text',
        type: TypeButton.BUTTON
    },
    decorators: [ThemeDecorator(Theme.LIGHT)]
};

export const PrimaryDark: Story = {
    args: {
        children: 'Text',
        type: TypeButton.BUTTON
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const Clear: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.CLEAR
    },
    decorators: [ThemeDecorator(Theme.LIGHT)]
};

export const ClearDark: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.CLEAR
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const Outline: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.OUTLINE
    },
    decorators: [ThemeDecorator(Theme.LIGHT)]
};

export const OutlineDark: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.OUTLINE
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};
