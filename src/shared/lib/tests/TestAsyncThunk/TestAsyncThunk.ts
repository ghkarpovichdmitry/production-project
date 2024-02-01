import { type StateSchema } from 'app/providers/StoreProvider';
import { type AsyncThunkAction } from '@reduxjs/toolkit';
import axios, { type AxiosStatic } from 'axios/index';

type ActionCreatorType<Return, Arg, _RejectedValue>
    // = (arg: Arg) => AsyncThunkAction<Return, Arg, { rejectedValue: _RejectedValue }>;
    = (arg: Arg) => AsyncThunkAction<Return, Arg, any>;

interface ActionInterface<ThunkArg, PayloadValue> {
    type: string
    payload: PayloadValue
    error?: unknown
    meta: {
        requestId: string
        arg: ThunkArg
        aborted?: boolean
        requestStatus: string
    }
}

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);

export class TestAsyncThunk<Return, Arg, RejectedValue> {
    dispatch: jest.MockedFn<any>;

    getState: () => StateSchema;

    actionCreator: ActionCreatorType<Return, Arg, RejectedValue>;

    api: jest.MockedFunctionDeep<AxiosStatic>;
    navigate: jest.MockedFn<any>;

    constructor (actionCreator: ActionCreatorType<Return, Arg, RejectedValue>) {
        this.actionCreator = actionCreator;
        this.dispatch = jest.fn();
        this.getState = jest.fn();

        this.api = mockedAxios;
        this.navigate = jest.fn();
    }

    async callThunk (arg: Arg): Promise<ActionInterface<any, any>> {
        const action = this.actionCreator(arg);
        const result = await action(
            this.dispatch,
            this.getState,
            { api: this.api, navigate: this.navigate }
        );

        return result;
    }
}
