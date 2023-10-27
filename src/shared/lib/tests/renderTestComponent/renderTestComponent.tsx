import { type ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { render, type RenderResult } from '@testing-library/react';
import i18nForTests from 'shared/config/i18n/i18nForTests';
import { MemoryRouter } from 'react-router-dom';

export interface componentRenderOptions {
    route?: string
}

export const renderTestComponent =
    (component: ReactNode, options: componentRenderOptions = {}): RenderResult => {
        const { route = '/' } = options;

        return render(
            <MemoryRouter initialEntries={[route]}>
                <I18nextProvider i18n={i18nForTests}>
                    {component}
                </I18nextProvider>
            </MemoryRouter>
        );
    };
