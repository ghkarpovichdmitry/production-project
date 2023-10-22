import { render, screen } from '@testing-library/react';
import { Button, ThemeButton, TypeButton } from './Button';

describe('Button tests', () => {
    test('Button with text', () => {
        // eslint-disable-next-line i18next/no-literal-string
        render(<Button>Test button</Button>);

        expect(screen.getByText('Test button')).toBeInTheDocument();
    });

    test('Button with param - theme', () => {
        const { container } = render(<Button theme={ThemeButton.CLEAR} />);

        expect(container.firstChild).toHaveClass('clear');
    });

    test('Button with children', () => {
        const { container } =
            render(<Button theme={ThemeButton.CLEAR}><i className="children-icon" /></Button>);

        expect(container.firstChild.firstChild).toHaveClass('children-icon');
    });

    test('Button with custom attribute', () => {
        const { container } = render(<Button disabled aria-pressed="false" />);

        expect(container.firstChild).toHaveAttribute('aria-pressed', 'false');
        expect(container.firstChild).toHaveAttribute('disabled');
    });

    test('Button with custom attribute', () => {
        const { container } = render(<Button type={TypeButton.RESET} />);

        expect(container.firstChild).toHaveAttribute('type', TypeButton.RESET);
    });
});
