import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import MainPage from './MainPage';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta = {
    component: MainPage,
    title: 'pages/MainPage',
    parameters: {
        layout: 'fullscreen'
    },
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof MainPage>;

export const Normal: Story = {
    decorators: [
        ThemeDecorator(Theme.LIGHT),
        StoreDecorator({
            loginForm: {
                username: 'user',
                password: 'pass',
                isLoading: false
            }
        })
    ]
};

export const Dark: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({
            loginForm: {
                username: 'user',
                password: 'pass',
                isLoading: false
            }
        })
    ]
};
