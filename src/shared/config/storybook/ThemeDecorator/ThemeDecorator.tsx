import { type StoryFn } from '@storybook/react';
import { type Theme, ThemeProvider } from 'app/providers/ThemeProvider/index';

// eslint-disable-next-line react/display-name
export const ThemeDecorator = (theme: Theme) => (StoryComponent: StoryFn) => {
    return (
        <ThemeProvider initialTheme={theme}>
            <div className={`app ${theme}`}>
                <StoryComponent/>
            </div>
        </ThemeProvider>
    );
};