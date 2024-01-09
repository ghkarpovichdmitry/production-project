import { type Meta } from '@storybook/blocks';
import type { StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { LoginForm } from './LoginForm';

// const meta = {
//     component: LoginForm,
//     title: 'features/AuthByUserName/LoginForm',
//     parameters: {
//         layout: 'fullscreen'
//     },
//     tags: ['autodocs']
// } satisfies Meta<typeof LoginForm>;

const meta: Meta<typeof LoginForm> = {
    component: LoginForm,
    title: 'features/AuthByUserName/LoginForm',
    parameters: {
        layout: 'fullscreen'
    },
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    decorators: [
        ThemeDecorator(Theme.LIGHT),
        StoreDecorator({
            loginForm: {
                username: 'user',
                password: 'pass'
            }
        })]
};

export const Dark: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({
            loginForm: {
                username: 'user',
                password: 'pass'
            }
        })]
};

export const DarkWithError: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({
            loginForm: {
                username: 'user',
                password: 'pass',
                error: 'ERROR'
            }
        })]
};

export const DarkWithLoading: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({
            loginForm: {
                isLoading: true
            }
        })]
};
