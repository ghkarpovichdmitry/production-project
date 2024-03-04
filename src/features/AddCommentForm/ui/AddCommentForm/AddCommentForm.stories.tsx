import type { Meta, StoryObj } from '@storybook/react';
import AddCommentForm from './AddCommentForm';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { action } from '@storybook/addon-actions';

const meta: Meta = {
    component: AddCommentForm,
    title: 'features/AddCommentForm',
    parameters: {
        layout: 'fullscreen'
    },
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof AddCommentForm>;

export const Light: Story = {
    args: {
        onSendComment: action('onSendComment')
    },
    decorators: [
        ThemeDecorator(Theme.LIGHT),
        StoreDecorator({})
    ]
};

export const Dark: Story = {
    args: {
        onSendComment: action('onSendComment')
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({})
    ]
};

export const Violet: Story = {
    args: {
        onSendComment: action('onSendComment')
    },
    decorators: [
        ThemeDecorator(Theme.VIOLET),
        StoreDecorator({})
    ]
};
