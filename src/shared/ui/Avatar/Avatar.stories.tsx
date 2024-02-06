import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Avatar } from './Avatar';
import AvatarImg from './everest-4828404_640.png';

const meta: Meta = {
    component: Avatar,
    title: 'shared/Avatar',
    parameters: {
        layout: 'fullscreen'
    },
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const PrimaryLight: Story = {
    args: {
        alt: 'Avatar',
        size: 150,
        src: AvatarImg
    },
    decorators: [ThemeDecorator(Theme.LIGHT)]
};

export const PrimaryDark: Story = {
    args: {
        alt: 'Avatar',
        size: 150,
        src: AvatarImg
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};
