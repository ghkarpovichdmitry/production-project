import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { CommentList } from './CommentList';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta = {
    component: CommentList,
    title: 'entities/Comment/CommentList',
    parameters: {
        layout: 'fullscreen'
    },
    tags: ['autodocs']
};

const testComments = [
    {
        id: '1',
        text: 'some comment',
        articleId: '1',
        user: {
            id: '1',
            username: 'admin',
            password: '123',
            role: 'ADMIN',
            avatar: 'https://img.freepik.com/free-photo/senior-man-white-sweater-eyeglasses_273609-42003.jpg?size=626&ext=jpg'
        }
    },
    {
        id: '2',
        text: 'some comment 2',
        articleId: '1',
        user: {
            id: '2',
            username: 'user',
            password: '123',
            role: 'USER',
            avatar: 'https://t3.ftcdn.net/jpg/03/02/88/46/240_F_302884605_actpipOdPOQHDTnFtp4zg4RtlWzhOASp.jpg'
        }
    },
    {
        id: '3',
        text: 'some comment 3',
        articleId: '1',
        user: {
            id: '3',
            username: 'user 2',
            password: '123',
            role: 'USER'
        }
    }
];

export default meta;
type Story = StoryObj<typeof CommentList>;

export const Light: Story = {
    args: {
        comments: testComments,
        isLoading: false
    },
    decorators: [
        ThemeDecorator(Theme.LIGHT),
        StoreDecorator({})
    ]
};

export const Dark: Story = {
    args: {
        comments: testComments,
        isLoading: false
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({})
    ]
};

export const Violet: Story = {
    args: {
        comments: testComments,
        isLoading: false
    },
    decorators: [
        ThemeDecorator(Theme.VIOLET),
        StoreDecorator({})
    ]
};

export const LightLoading: Story = {
    args: {
        comments: undefined,
        isLoading: true
    },
    decorators: [
        ThemeDecorator(Theme.LIGHT),
        StoreDecorator({})
    ]
};

export const DarkLoading: Story = {
    args: {
        comments: undefined,
        isLoading: true
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({})
    ]
};

export const VioletLoading: Story = {
    args: {
        comments: undefined,
        isLoading: true
    },
    decorators: [
        ThemeDecorator(Theme.VIOLET),
        StoreDecorator({})
    ]
};
