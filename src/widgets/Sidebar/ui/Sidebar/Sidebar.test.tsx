import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from './Sidebar';
import { renderTestComponent } from 'shared/lib/tests/renderTestComponent/renderTestComponent';

describe('Sidebar test', () => {
    test('Sidebar className test', () => {
        renderTestComponent(<Sidebar />);

        expect(screen.getByTestId('sidebar')).toHaveClass('Sidebar');
    });

    test('Sidebar test toggle', () => {
        renderTestComponent(<Sidebar />);

        const sidebar = screen.getByTestId('sidebar');
        const toggleBtn = screen.getByTestId('sidebar-toggle');

        expect(sidebar).toHaveClass('collapsed');

        fireEvent.click(toggleBtn);

        expect(sidebar).not.toHaveClass('collapsed');
    });
});
