import { createSlice } from '@reduxjs/toolkit';
import { type ProfileSchema } from '../types/profile';

const initialState: ProfileSchema = {
    data: undefined,
    readonly: true,
    error: undefined,
    isLoading: false
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {}
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
