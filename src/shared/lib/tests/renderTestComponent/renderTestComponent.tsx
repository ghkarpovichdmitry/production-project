import { type ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { render, type RenderResult } from '@testing-library/react';
import i18nForTests from 'shared/config/i18n/i18nForTests';
import { MemoryRouter } from 'react-router-dom';

export const renderTestComponent = (component: ReactNode): RenderResult => {
    return render(
        <MemoryRouter>
            <I18nextProvider i18n={i18nForTests}>
                {component}
            </I18nextProvider>
        </MemoryRouter>
    );
};

export default renderTestComponent;
