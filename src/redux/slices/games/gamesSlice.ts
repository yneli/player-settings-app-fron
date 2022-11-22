import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchAllGames = createAsyncThunk("games/fetchAllGames", async() => {
    const params = {
        "dbtype": "sel_all_games",
    };
    const requestOptions = {
        method: "POST",
        body: JSON.stringify(params),
        headers: {
            "Content-Type": "application/json",
},
          
    };
    const response = await fetch("https://player-info135.herokuapp.com/db", requestOptions);
    const data = await response.json();
    console.log(data);

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