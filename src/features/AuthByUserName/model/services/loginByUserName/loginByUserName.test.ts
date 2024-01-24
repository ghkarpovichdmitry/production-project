import axios from 'axios';
import { loginByUserName } from './loginByUserName';
import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);

describe('loginByUserName test', function () {
    test('Success login', async () => {
        const userData = { username: 'Dzmitry', id: '1' };
        mockedAxios.post.mockReturnValue(Promise.resolve({ data: userData }));

        const thunk = new TestAsyncThunk(loginByUserName);
        const result = await thunk.callThunk({ username: 'Dzmitry', password: '123' });

        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData));
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(userData);
    });

    test('Error login', async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));

        const thunk = new TestAsyncThunk(loginByUserName);
        const result = await thunk.callThunk({ username: 'Andrew', password: '321' });

        expect(mockedAxios.post).toHaveBeenCalled();
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('some error happen');
    });
});

// ! old tests below - keep for now, remove later
// #
// import { type StateScheme } from 'app/providers/StoreProvider';
// import { type DeepPartial, Dispatch } from '@reduxjs/toolkit';
// import { beforeEach } from '@jest/globals';
// jest.mock('axios');
// const mockedAxios = jest.mocked(axios, true);
//
// describe('loginByUserName test', function () {
//     let dispatch = Dispatch;
//     let getState = () => StateScheme;
//
//     beforeEach(() => {
//         dispatch = jest.fn();
//         getState = jest.fn();
//     })
//
//     test('Success login', async () => {
//         const userData = { username: 'Dzmitry', 'id': '1'};
//         mockedAxios.post.mockReturnValue(Promise.resolve({ data: userData }));
//         const action = loginByUserName({ username: 'Dzmitry', password: '123'});
//         const result = await action(dispatch, getState, undefined);
//
//         expect(mockedAxios.post).toHaveBeenCalled();
//         expect(dispatch).toHaveBeenCalledTimes(3);
//         expect(result.meta.requestStatus).toBe('fulfilled');
//         expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData));
//         expect(result.payload).toEqual(userData);
//     });
//
//     test('Error login', async () => {
//         mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
//         const action = loginByUserName({ username: 'Andrew', password: '321'});
//         const result = await action(dispatch, getState, undefined);
//         console.log(result);
//
//         expect(mockedAxios.post).toHaveBeenCalled();
//         expect(dispatch).toHaveBeenCalledTimes(2);
//         expect(result.meta.requestStatus).toBe('rejected');
//         expect(result.payload).toBe('some error happen');
//     });
// });
