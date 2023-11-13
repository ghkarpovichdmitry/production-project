import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { type User, type UserScheme } from '../types/user';

const initialState: UserScheme = {};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state: UserScheme, action: PayloadAction<User>) => {
            state.authData = action.payload;
        },
        initAuthData: (state: UserScheme, action: PayloadAction<User>) => {
            state.authData = action.payload;
        },
        logout: (state: UserScheme) => {
            state.authData = undefined;
            localStorage.removeItem(USER_LOCALSTORAGE_KEY);
        }
    }
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
