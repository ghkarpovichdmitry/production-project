import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import LoginForm from './LoginForm';

const meta: Meta = {
    component: LoginForm,
    title: 'features/AuthByUserName/LoginForm',
    parameters: {
        layout: 'fullscreen'
    },
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Normal: Story = {
    decorators: [
        ThemeDecorator(Theme.LIGHT),
        StoreDecorator({
            loginForm: {
                username: 'user',
                password: 'pass',
                isLoading: false
            }
        })]
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
        })]
};

export const NormalWithError: Story = {
    decorators: [
        ThemeDecorator(Theme.LIGHT),
        StoreDecorator({
            loginForm: {
                username: '',
                password: '',
                isLoading: false,
                error: 'ERROR'
            }
        })]
};

export const DarkWithError: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({
            loginForm: {
                isLoading: false,
                username: '',
                password: '',
                error: 'ERROR'
            }
        })]
};

export const NormalWithLoading: Story = {
    decorators: [
        ThemeDecorator(Theme.LIGHT),
        StoreDecorator({
            loginForm: {
                username: '',
                password: '',
                isLoading: true
            }
        })]
};

export const DarkWithLoading: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({
            loginForm: {
                username: '',
                password: '',
                isLoading: true
            }
        })]
};
