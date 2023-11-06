import { type ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter = (): ReactElement => {
    const { t } = useTranslation();
    const counterValue = useSelector(getCounterValue);
    const dispatch = useDispatch();

    const increaseValue = (): void => {
        dispatch(counterActions.increment());
    };

    const decreaseValue = (): void => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h1 data-testid='counter-value'>{counterValue}</h1>
            <Button onClick={increaseValue} data-testid='increment-btn'>{t('Increment')}</Button>
            <Button onClick={decreaseValue} data-testid='decrement-btn'>{t('Decrement')}</Button>
        </div>
    );
};
