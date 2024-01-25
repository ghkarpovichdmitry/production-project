import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { loginByUserName } from '../services/loginByUserName/loginByUserName';
import { type LoginSchema } from '../types/loginSchema';

const initialState: LoginSchema = {
    isLoading: false,
    username: '',
    password: ''
};

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUserName: (state: LoginSchema, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        setPassword: (state: LoginSchema, action: PayloadAction<string>) => {
            state.password = action.payload;
        }
    },
    extraReducers: (builder): any => {
        builder
            .addCase(loginByUserName.pending, (state: LoginSchema) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(loginByUserName.fulfilled, (state: LoginSchema) => {
                state.isLoading = false;
            })
            .addCase(loginByUserName.rejected, (state: LoginSchema, action: any) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    }
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
