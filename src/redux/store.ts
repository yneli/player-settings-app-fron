import { configureStore } from "@reduxjs/toolkit";
import { gamesReducer } from "./slices/games/gamesSlice";

export const store = configureStore({
    reducer: {
        addres: gamesReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;