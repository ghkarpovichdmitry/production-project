import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { loginByUserName } from '../services/loginByUserName/loginByUserName';
import { type LoginScheme } from '../types/loginScheme';

const initialState: LoginScheme = {
    isLoading: false,
    username: '',
    password: ''
};

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUserName: (state: LoginScheme, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        setPassword: (state: LoginScheme, action: PayloadAction<string>) => {
            state.password = action.payload;
        }
    },
    extraReducers: (builder): any => {
        builder
            .addCase(loginByUserName.pending, (state: LoginScheme) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(loginByUserName.fulfilled, (state: LoginScheme) => {
                state.isLoading = false;
            })
            .addCase(loginByUserName.rejected, (state: LoginScheme, action: any) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    }
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
