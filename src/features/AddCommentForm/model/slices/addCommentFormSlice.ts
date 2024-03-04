import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type AddCommentFormSchema } from '../types/addCommentForm';

const initialState: AddCommentFormSchema = {};

export const addCommentFormSlice = createSlice({
    name: 'addCommentFormSlice',
    initialState,
    reducers: {
        setText: (state: AddCommentFormSchema, action: PayloadAction<string>) => {
            state.text = action.payload;
        }
    },
    extraReducers: (): any => {}
});

export const { actions: addCommentFormActions } = addCommentFormSlice;
export const { reducer: addCommentFormReducer } = addCommentFormSlice;
