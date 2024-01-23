import { type StateScheme } from 'app/providers/StoreProvider';
import { type AsyncThunkAction } from '@reduxjs/toolkit';

type ActionCreatorType<Return, Arg, RejectedValue>
    = (arg: Arg) => AsyncThunkAction<Return, Arg, { rejectedValue: RejectedValue }>;

interface ActionInterface<ThunkArg, PayloadValue> {
    type: string
    payload: PayloadValue
    error?: {
        message: string
    }
    meta: {
        requestId: string
        arg: ThunkArg
        aborted: boolean
        requestStatus: string
    }
}

export class TestAsyncThunk<Return, Arg, RejectedValue> {
    dispatch: jest.MockedFn<any>;
    getState: () => StateScheme;
    actionCreator: ActionCreatorType<Return, Arg, RejectedValue>;

    constructor (actionCreator: ActionCreatorType<Return, Arg, RejectedValue>) {
        this.actionCreator = actionCreator;
        this.dispatch = jest.fn();
        this.getState = jest.fn();
    }

    async callThunk (arg: Arg): Promise<ActionInterface<any, any>> {
        const action = this.actionCreator(arg);
        const result = await action(this.dispatch, this.getState, undefined);

        return result;
    }
}
