import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { stat } from "fs";

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
export const fetchPlayers = createAsyncThunk<any, any>("games/fetchPlayers", async(params) => {
    const url = "https://player-info135.herokuapp.com/db";
    let { data } = await axios.request({
        url: url,
        method: "post",
        data: {
            "dbtype": "sel_all_gamers",
            "id_game": params,
        },
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
    });
    return data;
});
const initialState:any = {
    items: null,
    status: "loading",
    players: null,
    game: {
        gamesName: null,
        urlImg: null,
    },
};
const gamesSlice = createSlice({
    name: "games",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllGames.pending, (state) => {
                state.items = null;})
            .addCase(fetchAllGames.fulfilled, (state, action) => {
                state.items = action.payload; })
            .addCase(fetchAllGames.rejected, (state) => {
                state.items = null;
            })
            .addCase(fetchPlayers.pending, (state) => {
                state.players = null;})
            .addCase(fetchPlayers.fulfilled, (state, action) => {
                console.log(action.payload[0]);
                state.game.gamesName = action.payload[0].name;
                state.game.urlImg = action.payload[0].game_url;
                state.players = action.payload; })
            .addCase(fetchPlayers.rejected, (state) => {
                state.players = null;
                state.loading = ""
            });
            
    },
});
export const gamesReducer = gamesSlice.reducer;
export const selectIsItems = (state: any) => Boolean(state.items);