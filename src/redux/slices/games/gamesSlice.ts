import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchAllGames = createAsyncThunk("games/fetchAllGames", async() => {
    const url = "https://player-info135.herokuapp.com/db";
    let { data } = await axios.request({
        url: url,
        method: "post",
        data: {
            "dbtype": "sel_all_games",
        },
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
    });
    return data;
});

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