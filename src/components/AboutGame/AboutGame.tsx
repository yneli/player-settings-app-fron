import style from "./AboutGame.module.scss";
import { SmallSearch } from "../SmallSearch/SmallSearch";
import { CardPlayer } from "../CardPlayer/CardPlayer";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { fetchPlayers } from "../../redux/slices/games/gamesSlice";
import { useParams } from "react-router-dom";
import { AppPagination } from "../Pagination/AppPagination";

export const AboutGame = () => {
    const dispatch = useAppDispatch();
    const games = useParams();
    React.useEffect(() => {
        dispatch(fetchPlayers(games.id));
    },[games]);
    const data = useAppSelector((state) => state.games.players);
    const game = useAppSelector((state) => state.games.game);
    
    return <div className={style.container}>
        <div className={style.about}>
            <img src={game.urlImg} alt="" />
            <h3 className={style.title}>{game.gamesName}</h3>
        </div>
        <div className={style.search}>
            <SmallSearch/>
        </div>
        <div className={style.cards}>
            {data?.map// @ts-ignore
            (item => <CardPlayer {...item}/>)}
        </div>
        <div className={style.pagination}>
            <AppPagination/>
        </div>
    </div>;
};