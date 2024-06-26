import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { LangSwitcher } from './LangSwitcher';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta = {
    component: LangSwitcher,
    title: 'widgets/LangSwitcher',
    parameters: {
        layout: 'fullscreen'
    },
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof LangSwitcher>;

export const Normal: Story = {
    args: {
        short: false
    },
    decorators: [
        ThemeDecorator(Theme.LIGHT),
        StoreDecorator({
            user: {}
        })
    ]
};

export const NormalShort: Story = {
    args: {
        short: true
    },
    decorators: [
        ThemeDecorator(Theme.LIGHT),
        StoreDecorator({
            user: {}
        })
    ]
};

export const Dark: Story = {
    args: {
        short: false
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const DarkShort: Story = {
    args: {
        short: true
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const Violet: Story = {
    args: {
        short: false
    },
    decorators: [ThemeDecorator(Theme.VIOLET)]
};

export const VioletShort: Story = {
    args: {
        short: true
    },
    decorators: [ThemeDecorator(Theme.VIOLET)]
};
