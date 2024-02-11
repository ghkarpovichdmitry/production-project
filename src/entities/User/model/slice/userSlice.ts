import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { type User, type UserSchema } from '../types/user';

const initialState: UserSchema = {
    _isInited: false
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state: UserSchema, action: PayloadAction<User>) => {
            state.authData = action.payload;
        },
        initAuthData: (state: UserSchema) => {
            const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
            if (user) {
                state.authData = JSON.parse(user);
            }
            state._isInited = true;
        },
        logout: (state: UserSchema) => {
            state.authData = undefined;
            localStorage.removeItem(USER_LOCALSTORAGE_KEY);
        }
    }
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
