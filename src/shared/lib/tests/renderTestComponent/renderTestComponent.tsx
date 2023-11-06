import { type DeepPartial } from '@reduxjs/toolkit';
import { type StateScheme, StoreProvider } from 'app/providers/StoreProvider/index';
import { type ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { render, type RenderResult } from '@testing-library/react';
import i18nForTests from 'shared/config/i18n/i18nForTests';
import { MemoryRouter } from 'react-router-dom';

export interface componentRenderOptions {
    route?: string
    initialState?: DeepPartial<StateScheme>
}

export const renderTestComponent =
    (component: ReactNode, options: componentRenderOptions = {}): RenderResult => {
        const { route = '/', initialState } = options;

        return render(
            <MemoryRouter initialEntries={[route]}>
                <I18nextProvider i18n={i18nForTests}>
                    <StoreProvider initialState={initialState}>
                        {component}
                    </StoreProvider>
                </I18nextProvider>
            </MemoryRouter>
        );
    };
