import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { LoginModal } from './LoginModal';

export default {
    component: LoginModal,
    title: 'Features/AuthByUserName/LoginModal',
    parameters: {
        layout: 'fullscreen'
    },
    tags: ['autodocs']
} as Meta;
type Story = StoryObj<typeof LoginModal>;

export const NormalOpen: Story = {
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

export const DarkOpen: Story = {
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

export const NormalClosed: Story = {
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

export const DarkClosed: Story = {
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
