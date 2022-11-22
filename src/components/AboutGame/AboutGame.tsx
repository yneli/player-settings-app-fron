import style from "./AboutGame.module.scss";
import { SmallSearch } from "../SmallSearch/SmallSearch";
import { CardPlayer } from "../CardPlayer/CardPlayer";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { fetchPlayers } from "../../redux/slices/games/gamesSlice";
import { useParams } from "react-router-dom";

export const AboutGame = () => {
    const dispatch = useAppDispatch();
    const games = useParams();
    React.useEffect(() => {
        dispatch(fetchPlayers(games.id));
    },[games]);
    const data = useAppSelector((state) => state.games.players);
    const game = useAppSelector((state) => state.games.game);
    console.log(game);
    
    
    return <div className={style.container}>
        <div className={style.about}><h3>{game.gamesName}</h3>
        <img src={game.urlImg} alt="" />
        </div>
        <div className={style.search}>
            <SmallSearch/>
        </div>
        <div className={style.cards}>
            {data?.map// @ts-ignore
            (item => <CardPlayer {...item}/>)}
        </div>
    </div>;
};