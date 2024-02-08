import type { Meta, StoryObj } from '@storybook/react';
import { ProfileCard } from './ProfileCard';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import avatar from 'shared/assets/tests/everest-4828404_640.png';

const meta: Meta = {
    component: ProfileCard,
    title: 'entities/ProfileCard',
    parameters: {
        layout: 'fullscreen'
    },
    args: {},
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

export const ProfileCardRegular: Story = {
    args: {
        data: {
            username: 'JohnDoe',
            firstname: 'John',
            lastname: 'Doe',
            age: 33,
            country: Country.Norway,
            currency: Currency.EUR,
            city: 'Oslo',
            avatar
        }
    },
    decorators: [ThemeDecorator(Theme.LIGHT)]
};

export const ProfileCardDark: Story = {
    args: {
        data: {
            username: 'JohnDoe',
            firstname: 'John',
            lastname: 'Doe',
            age: 33,
            country: Country.Norway,
            currency: Currency.EUR,
            city: 'Oslo',
            avatar
        }
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const ProfileCardLoading: Story = {
    args: {
        isLoading: true
    },
    decorators: [ThemeDecorator(Theme.LIGHT)]
};

export const ProfileCardLoadingDark: Story = {
    args: {
        isLoading: true
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const ProfileCardError: Story = {
    args: {
        error: 'Some server error'
    },
    decorators: [ThemeDecorator(Theme.LIGHT)]
};

export const ProfileCardErrorDark: Story = {
    args: {
        error: 'Some server error'
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};
