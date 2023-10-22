import { fireEvent, screen } from '@testing-library/react';
import {
    renderWithTranslation
} from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { Sidebar } from './Sidebar';

describe('Sidebar test', () => {
    test('Sidebar className test', () => {
        renderWithTranslation(<Sidebar />);

        expect(screen.getByTestId('sidebar')).toHaveClass('Sidebar');
    });

    test('Sidebar test toggle', () => {
        renderWithTranslation(<Sidebar />);

        const sidebar = screen.getByTestId('sidebar');
        const toggleBtn = screen.getByTestId('sidebar-toggle');

        expect(sidebar).toHaveClass('collapsed');

        fireEvent.click(toggleBtn);

        expect(sidebar).not.toHaveClass('collapsed');
    });
});
