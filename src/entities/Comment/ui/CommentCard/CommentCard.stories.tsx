import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { CommentCard } from './CommentCard';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta = {
    component: CommentCard,
    title: 'entities/Comment/CommentCard',
    parameters: {
        layout: 'fullscreen'
    },
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof CommentCard>;

export const Light: Story = {
    args: {
        comment: {
            id: '1',
            text: 'some comment',
            user: {
                id: '2',
                username: 'Alex'
            }
        }
    },
    decorators: [
        ThemeDecorator(Theme.LIGHT),
        StoreDecorator({})
    ]
};

export const Dark: Story = {
    args: {
        comment: {
            id: '1',
            text: 'some comment',
            user: {
                id: '2',
                username: 'Alex'
            }
        }
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({})
    ]
};

export const Violet: Story = {
    args: {
        comment: {
            id: '1',
            text: 'some comment',
            user: {
                id: '2',
                username: 'Alex'
            }
        }
    },
    decorators: [
        ThemeDecorator(Theme.VIOLET),
        StoreDecorator({})
    ]
};

export const LightLoading: Story = {
    args: {
        comment: undefined,
        isLoading: true
    },
    decorators: [
        ThemeDecorator(Theme.LIGHT),
        StoreDecorator({})
    ]
};
