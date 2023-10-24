import { type StoryFn } from '@storybook/react';
import { type Theme } from 'app/providers/ThemeProvider';

// eslint-disable-next-line react/display-name
export const ThemeDecorator = (Theme: Theme) => (StoryComponent: StoryFn) => {
    return (
        <div className={`app ${Theme}`}>
            <StoryComponent/>
        </div>
    );
};
