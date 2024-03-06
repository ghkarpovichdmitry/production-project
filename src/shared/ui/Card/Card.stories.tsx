import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Card } from './Card';
import { Text } from 'shared/ui/Text/Text';

const meta: Meta = {
    component: Card,
    title: 'shared/Card',
    parameters: {
        layout: 'fullscreen'
    },
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Card>;

export const PrimaryLight: Story = {
    args: {
        children: <Text title='test title' text='Some test text for Card'/>
    },
    decorators: [ThemeDecorator(Theme.LIGHT)]
};

export const PrimaryDark: Story = {
    args: {
        children: <Text title='test title' text='Some test text for Card'/>
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const PrimaryViolet: Story = {
    args: {
        children: <Text title='test title' text='Some test text for Card'/>
    },
    decorators: [ThemeDecorator(Theme.VIOLET)]
};
