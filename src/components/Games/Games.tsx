import style from "./Games.module.scss";
import { SmallSearch } from "../SmallSearch/SmallSearch";
import { GameItems } from "../GameItems/GameItems";
import React from "react";
import { Dropdown } from "../Dropdown/Dropdown";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { fetchAllGames } from "../../redux/slices/games/gamesSlice";
import { GamesSkeleton } from "./GamesSkeleton";
import { SkeletonButtons } from "../SkeletinButtons";

export const Games = () => {
    const dispatch = useAppDispatch();
    const status = useAppSelector((state) => state.games.status);
    React.useEffect(() => {
        dispatch(fetchAllGames());
    },[]);
    let data:any = useAppSelector((state) => state.games.items);
    const games = data?.map((item: any) => <GameItems key={item.id} path={item.id} image={item.url} />);
    const skeletons = [...new Array(5)].map((_, index) => <GamesSkeleton key={index} />);
    return <div className={style.games}>
        <div className={style.sorted}>
            {status === "loading"?   <SkeletonButtons/> : <><SmallSearch/>
                <Dropdown/></>}
        </div>
        <div className={style.items}> 
            {status === "loading"? skeletons : games}
        </div>
    </div>;
};