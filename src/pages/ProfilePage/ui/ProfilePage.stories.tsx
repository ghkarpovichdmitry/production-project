import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import ProfilePage from './ProfilePage';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';

const meta: Meta = {
    component: ProfilePage,
    title: 'pages/ProfilePage',
    parameters: {
        layout: 'fullscreen'
    },
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;

const testData = {
    firstname: 'Dzmitry',
    lastname: 'Karpovich',
    age: 33,
    currency: Currency.USD,
    country: Country.Poland,
    city: 'Gdansk',
    username: 'admin'
};

export const Normal: Story = {
    decorators: [
        ThemeDecorator(Theme.LIGHT),
        StoreDecorator({
            profile: {
                form: testData,
                data: testData,
                isLoading: false,
                error: undefined,
                readonly: true
            }
        })]
};

export const Dark: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({
            profile: {
                data: undefined,
                isLoading: false,
                error: undefined,
                readonly: true
            }
        })]
};
