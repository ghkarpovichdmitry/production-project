import { type Meta } from '@storybook/blocks';
import type { StoryObj } from '@storybook/react';
import { Button, ButtonSize, ButtonTheme, ButtonType } from './Button';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof Button> = {
    component: Button,
    title: 'shared/Button',
    parameters: {
        layout: 'fullscreen'
    },
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'Text',
        type: ButtonType.BUTTON
    },
    decorators: [ThemeDecorator(Theme.LIGHT)]
};

export const PrimaryOnDarkBackground: Story = {
    args: {
        children: 'Text',
        type: ButtonType.BUTTON
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const BackgroundTheme: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.BACKGROUND
    },
    decorators: [ThemeDecorator(Theme.LIGHT)]
};

export const BackgroundThemeDark: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.BACKGROUND
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const BackgroundInvertedTheme: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.BACKGROUND_INVERTED
    },
    decorators: [ThemeDecorator(Theme.LIGHT)]
};

export const BackgroundInvertedThemeDark: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.BACKGROUND_INVERTED
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const Clear: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.CLEAR
    },
    decorators: [ThemeDecorator(Theme.LIGHT)]
};

export const ClearDark: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.CLEAR
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const Outline: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINE
    },
    decorators: [ThemeDecorator(Theme.LIGHT)]
};

export const OutlineDark: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINE
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const OutlineSizeS: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.S
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const OutlineSizeM: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.M
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const OutlineSizeL: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.L
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const OutlineSizeXL: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.XL
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const ButtonSquare: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND,
        square: true
    },
    decorators: [ThemeDecorator(Theme.LIGHT)]
};

export const ButtonSquareDark: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND,
        square: true
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const ButtonSquareL: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND,
        square: true,
        size: ButtonSize.L
    },
    decorators: [ThemeDecorator(Theme.LIGHT)]
};

export const ButtonSquareXL: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND,
        square: true,
        size: ButtonSize.XL
    },
    decorators: [ThemeDecorator(Theme.LIGHT)]
};
