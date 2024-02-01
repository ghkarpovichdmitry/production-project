import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type Profile, type ProfileSchema } from '../types/profile';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';

const initialState: ProfileSchema = {
    data: undefined,
    readonly: true,
    error: undefined,
    isLoading: false
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
    extraReducers: (builder): any => {
        builder
            .addCase(fetchProfileData.pending, (state: ProfileSchema) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchProfileData.fulfilled, (
                state: ProfileSchema, action: PayloadAction<Profile>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchProfileData.rejected, (state: ProfileSchema, action: any) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    }
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
