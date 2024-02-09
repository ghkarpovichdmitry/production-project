import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

interface UseThemeResult {
    toggleTheme: () => void
    theme: Theme
}

export const useTheme = (): UseThemeResult => {
    const {
        theme,
        setTheme
    } = useContext(ThemeContext);

    /* eslint-disable indent */
    const toggleTheme = (): void => {
        let newTheme: Theme;

        switch (theme) {
            case Theme.DARK:
                newTheme = Theme.LIGHT;
                break;
            case Theme.LIGHT:
                newTheme = Theme.VIOLET;
                break;
            case Theme.VIOLET:
                newTheme = Theme.DARK;
                break;
            default:
                newTheme = Theme.VIOLET;
        }

        setTheme?.(newTheme);
        document.body.className = newTheme;
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
        /* eslint-enable indent */
    };

    return {
        theme: theme || Theme.VIOLET,
        toggleTheme
    };
};
