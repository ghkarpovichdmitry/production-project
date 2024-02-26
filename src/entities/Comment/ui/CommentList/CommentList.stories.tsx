import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { CommentList } from './CommentList';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta = {
    component: CommentList,
    title: 'entities/Comments/CommentList',
    parameters: {
        layout: 'fullscreen'
    },
    tags: ['autodocs']
};

const testEntities = {
    1: {
        id: '1',
        text: 'some comment',
        articleId: '1',
        userId: '1',
        user: {
            id: '1',
            username: 'admin',
            password: '123',
            role: 'ADMIN',
            avatar: 'https://img.freepik.com/free-photo/senior-man-white-sweater-eyeglasses_273609-42003.jpg?size=626&ext=jpg'
        }
    },
    2: {
        id: '2',
        text: 'some comment 2',
        articleId: '1',
        userId: '2',
        user: {
            id: '2',
            username: 'user',
            password: '123',
            role: 'USER',
            avatar: 'https://t3.ftcdn.net/jpg/03/02/88/46/240_F_302884605_actpipOdPOQHDTnFtp4zg4RtlWzhOASp.jpg'
        }
    },
    3: {
        id: '3',
        text: 'some comment 3',
        articleId: '1',
        userId: '3',
        user: {
            id: '3',
            username: 'user 2',
            password: '123',
            role: 'USER'
        }
    }
};

export default meta;
type Story = StoryObj<typeof CommentList>;

export const Light: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.LIGHT),
        StoreDecorator({
            articleDetailsComments: {
                isLoading: false,
                ids: ['1', '2'],
                entities: testEntities,
            }
        })
    ]
};

export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const Violet: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.VIOLET)]
};
