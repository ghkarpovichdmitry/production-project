import { CountrySelect } from './CountrySelect';
import { renderTestComponent } from 'shared/lib/tests/renderTestComponent/renderTestComponent';
import { screen } from '@testing-library/dom';
import { Country } from 'entities/Country';
import { fireEvent } from '@testing-library/react';

describe('CountrySelect test', function () {
    test('CountrySelect works', () => {
        const mockFunc = jest.fn();

        renderTestComponent(
            <CountrySelect
                value={Country.Norway}
                onChange={mockFunc}
                readonly={true}
            />
        );
        const select = screen.getByTestId('country-select');

        expect(select).toBeInTheDocument();
        expect(select).toHaveValue(Country.Norway);
        expect(select).toHaveTextContent('Poland');
        expect(select).toHaveTextContent('USA');
        expect(screen.getAllByRole('option').length).toBe(7);
        fireEvent.change(select, { target: { value: 'Poland' } });

        expect(mockFunc).toHaveBeenCalledWith(Country.Poland);
    });
});
