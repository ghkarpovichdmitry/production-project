import { Meta } from '@storybook/blocks';
import type { StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Navbar } from 'widgets/Navbar';

const meta: Meta<typeof Navbar> = {
    component: Navbar,
    title: 'widgets/Navbar',
    parameters: {
        layout: 'fullscreen'
    },
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    decorators: [
        ThemeDecorator(Theme.LIGHT),
        StoreDecorator({
            user: { authData: {} }
        })
    ]
};

export const Dark: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({
            user: { authData: {} }
        })
    ]
};
