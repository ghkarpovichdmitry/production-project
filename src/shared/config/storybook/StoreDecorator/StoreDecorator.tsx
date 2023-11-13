import { type DeepPartial } from '@reduxjs/toolkit';
import { type StoryFn } from '@storybook/react';
import { type StateScheme, StoreProvider } from 'app/providers/StoreProvider';

// eslint-disable-next-line react/display-name
export const StoreDecorator = (state: DeepPartial<StateScheme>) => (StoryComponent: StoryFn) => {
    return (
        <StoreProvider>
            <StoryComponent store={state}/>
        </StoreProvider>
    );
};
