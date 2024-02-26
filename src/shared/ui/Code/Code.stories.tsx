import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Code } from './Code';

const meta: Meta = {
    component: Code,
    title: 'shared/Code',
    parameters: {
        layout: 'fullscreen'
    },
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Code>;

export const Light: Story = {
    args: {
        text: 'const meta: Meta = {\n' +
            '    component: Code,\n' +
            '    title: \'shared/Code\',\n' +
            '    parameters: {\n' +
            '        layout: \'fullscreen\'\n' +
            '    },\n' +
            '    tags: [\'autodocs\']\n' +
            '};\n'
    },
    decorators: [ThemeDecorator(Theme.LIGHT)]
};

export const Dark: Story = {
    args: {
        text: 'const meta: Meta = {\n' +
            '    component: Code,\n' +
            '    title: \'shared/Code\',\n' +
            '    parameters: {\n' +
            '        layout: \'fullscreen\'\n' +
            '    },\n' +
            '    tags: [\'autodocs\']\n' +
            '};\n'
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const Violet: Story = {
    args: {
        text: 'const meta: Meta = {\n' +
            '    component: Code,\n' +
            '    title: \'shared/Code\',\n' +
            '    parameters: {\n' +
            '        layout: \'fullscreen\'\n' +
            '    },\n' +
            '    tags: [\'autodocs\']\n' +
            '};\n'
    },
    decorators: [ThemeDecorator(Theme.VIOLET)]
};
