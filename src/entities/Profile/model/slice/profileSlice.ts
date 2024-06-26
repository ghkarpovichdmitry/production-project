import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type Profile, type ProfileSchema } from '../types/profile';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';

const initialState: ProfileSchema = {
    data: undefined,
    form: undefined,
    readonly: true,
    error: undefined,
    isLoading: false
};

export const profileSlice = createSlice({
    name: 'profileSlice',
    initialState,
    reducers: {
        setReadOnly: (state: ProfileSchema, action: PayloadAction<boolean>) => {
            state.readonly = action.payload;
        },
        cancelEdit: (state: ProfileSchema) => {
            state.readonly = true;
            state.form = state.data;
            state.validateErrors = undefined;
        },
        updateProfile: (state: ProfileSchema, action: PayloadAction<Profile>) => {
            state.form = {
                ...state.form,
                ...action.payload
            };
        }
    },
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
                state.form = action.payload;
            })
            .addCase(fetchProfileData.rejected, (state: ProfileSchema, action: any) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(updateProfileData.pending, (state: ProfileSchema) => {
                state.validateErrors = undefined;
                state.isLoading = true;
            })
            .addCase(updateProfileData.fulfilled, (
                state: ProfileSchema, action: PayloadAction<Profile>) => {
                state.isLoading = false;
                state.data = action.payload;
                state.form = action.payload;
                state.readonly = true;
            })
            .addCase(updateProfileData.rejected, (state: ProfileSchema, action: any) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    }
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
