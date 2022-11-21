import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



const initialState = {
    items: null,
    status: "loading",
};

const gamesSlice = createSlice({
    name: "games",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        
            
    },
});
export const gamesReducer = gamesSlice.reducer;
export const selectIsItems = (state: any) => Boolean(state.items);