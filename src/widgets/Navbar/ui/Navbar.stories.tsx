import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Navbar } from 'widgets/Navbar';

const meta: Meta = {
    component: Navbar,
    title: 'widgets/Navbar',
    parameters: {
        layout: 'fullscreen'
    },
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Light: Story = {
    decorators: [
        ThemeDecorator(Theme.LIGHT),
        StoreDecorator({
            user: {}
        })
    ]
};

export const Dark: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({
            user: {}
        })
    ]
};

export const Violet: Story = {
    decorators: [
        ThemeDecorator(Theme.VIOLET),
        StoreDecorator({
            user: {}
        })
    ]
};
