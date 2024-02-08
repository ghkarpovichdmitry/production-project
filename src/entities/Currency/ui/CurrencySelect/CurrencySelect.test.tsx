import { CurrencySelect } from './CurrencySelect';
import { renderTestComponent } from 'shared/lib/tests/renderTestComponent/renderTestComponent';
import { screen } from '@testing-library/dom';
import { Currency } from 'entities/Currency';
import { fireEvent } from '@testing-library/react';

describe('CurrencySelect test', function () {
    test('CurrencySelect works', () => {
        const mockFunc = jest.fn();

        renderTestComponent(
            <CurrencySelect
                value={Currency.USD}
                onChange={mockFunc}
                readonly={true}
            />
        );
        const select = screen.getByTestId('currency-select');

        expect(select).toBeInTheDocument();
        expect(select).toHaveValue(Currency.USD);
        expect(select).toHaveTextContent('EUR');
        expect(select).toHaveTextContent('USD');
        expect(screen.getAllByRole('option').length).toBe(4);
        fireEvent.change(select, { target: { value: Currency.EUR } });

        expect(mockFunc).toHaveBeenCalledWith(Currency.EUR);
    });
});
