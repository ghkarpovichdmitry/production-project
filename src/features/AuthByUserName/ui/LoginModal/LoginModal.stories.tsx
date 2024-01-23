import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { LoginModal } from './LoginModal';

const meta: Meta = {
    component: LoginModal,
    title: 'features/AuthByUserName/LoginModal',
    parameters: {
        layout: 'fullscreen'
    },
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof LoginModal>;

export const Normal: Story = {
    args: {
        isOpen: true
    },
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
    args: {
        isOpen: true
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({
            loginForm: {
                username: 'user',
                password: 'pass'
            }
        })]
};

export const NormalIsLoading: Story = {
    args: {
        isOpen: true,
        lazy: false
    },
    decorators: [
        ThemeDecorator(Theme.LIGHT),
        StoreDecorator({
            loginForm: {
                username: 'user',
                password: 'pass',
                isLoading: true
            }
        })]
};

export const DarkIsLoading: Story = {
    args: {
        isOpen: true,
        lazy: false
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({
            loginForm: {
                username: 'user',
                password: 'pass',
                isLoading: true
            }
        })]
};
