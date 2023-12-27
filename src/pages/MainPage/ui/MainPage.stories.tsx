import { Meta } from '@storybook/blocks';
import type { StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import MainPage from './MainPage';

const meta: Meta<typeof MainPage> = {
    component: MainPage,
    title: 'pages/MainPage',
    parameters: {
        layout: 'fullscreen'
    },
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT)]
};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)]
};
