import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { CommentCard } from './CommentCard';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta = {
    component: CommentCard,
    title: 'entities/Comments/CommentCard',
    parameters: {
        layout: 'fullscreen'
    },
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof CommentCard>;

export const LightLoading: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.LIGHT),
        StoreDecorator({
            articleDetailsComments: {
                isLoading: true,
                error: undefined,
            }
        })
    ]
};

// export const Dark: Story = {
//     args: {},
//     decorators: [ThemeDecorator(Theme.DARK)]
// };
//
// export const Violet: Story = {
//     args: {},
//     decorators: [ThemeDecorator(Theme.VIOLET)]
// };
