import style from "./Games.module.scss";
import { SmallSearch } from "../SmallSearch/SmallSearch";
import { GameItems } from "../GameItems/GameItems";
import React from "react";
import { Dropdown } from "../Dropdown/Dropdown";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { fetchAllGames } from "../../redux/slices/games/gamesSlice";

export const Games = () => {
    const dispatch = useAppDispatch();
    React.useEffect(() => {
        dispatch(fetchAllGames());
    },[]);
    let data:any = useAppSelector((state) => state.games.items);
    
    return <div className={style.games}>
        <div className={style.sorted}>
            <Dropdown/>
            <SmallSearch/>
        </div>
        <div className={style.items}> 
            {data?.map// @ts-ignore
            (item => <GameItems path={item.id} image={item.url}/>)}
        </div>
    </div>;
};