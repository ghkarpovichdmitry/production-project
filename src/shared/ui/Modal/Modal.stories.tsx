import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta = {
    component: Modal,
    title: 'shared/Modal',
    parameters: {
        layout: 'fullscreen'
    },
    args: {
        isOpen: true,
        lazy: false
    },
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Modal>;

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

export const ModalViolet: Story = {
    args: {
        isOpen: false,
        children: <div>Text example</div>,
        lazy: false
    },
    decorators: [ThemeDecorator(Theme.VIOLET)]
};
