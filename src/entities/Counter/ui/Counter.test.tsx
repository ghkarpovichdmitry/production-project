import { screen } from '@testing-library/dom';
import { fireEvent } from '@testing-library/react';
import { renderTestComponent } from 'shared/lib/tests/renderTestComponent/renderTestComponent';
import { Counter } from './Counter';

describe('Counter test', function () {
    test('Counter value check', () => {
        renderTestComponent(<Counter/>, {
            initialState: {
                counter: {
                    value: 10
                }
            }
        });

        expect(screen.getByTestId('counter-value')).toHaveTextContent('10');
    });

    test('Counter increment fn check', () => {
        renderTestComponent(<Counter/>, {
            initialState: {
                counter: {
                    value: 2
                }
            }
        });

        const incrementBtn = screen.getByTestId('increment-btn');

        fireEvent.click(incrementBtn);

        expect(screen.getByTestId('counter-value')).toHaveTextContent('3');
    });

    test('Counter decrement fn check', () => {
        renderTestComponent(<Counter/>, {
            initialState: {
                counter: {
                    value: 2
                }
            }
        });

        const decrementBtn = screen.getByTestId('decrement-btn');

        fireEvent.click(decrementBtn);

        expect(screen.getByTestId('counter-value')).toHaveTextContent('1');
    });
});
