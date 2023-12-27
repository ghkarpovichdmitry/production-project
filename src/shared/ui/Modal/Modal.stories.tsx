import { type Meta } from '@storybook/blocks';
import type { StoryObj } from '@storybook/react';
import { Modal } from './Modal';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof Modal> = {
    component: Modal,
    title: 'shared/Modal',
    parameters: {
        layout: 'fullscreen'
    },
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ModalRegular: Story = {
    args: {
        isOpen: false,
        children: <div>Text example</div>,
        lazy: false
    },
    decorators: [ThemeDecorator(Theme.LIGHT)]
};

export const ModalDark: Story = {
    args: {
        isOpen: false,
        children: <div>Text example</div>,
        lazy: false
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};
