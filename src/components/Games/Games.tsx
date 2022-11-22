import style from "./Games.module.scss";
import { SmallSearch } from "../SmallSearch/SmallSearch";
import { GameItems } from "../GameItems/GameItems";
import React from "react";
import { Dropdown } from "../Dropdown/Dropdown";
import { useAppDispatch } from "../../redux/hook";
import { fetchAllGames } from "../../redux/slices/games/gamesSlice";

export const Games = () => {
    const dispatch = useAppDispatch();
    React.useEffect(() => {
        dispatch(fetchAllGames());
    },[]);
    return <div className={style.games}>
        <div className={style.sorted}>
            <Dropdown/>
            <SmallSearch/>
        </div>
        <div className={style.items}>
            <GameItems/>
            <GameItems/>
            <GameItems/>
            <GameItems/>
            <GameItems/>
            <GameItems/>
            <GameItems/>
            <GameItems/>
            <GameItems/>
            <GameItems/>
            <GameItems/>
            <GameItems/>
            <GameItems/>
          
        </div>
    </div>;
};