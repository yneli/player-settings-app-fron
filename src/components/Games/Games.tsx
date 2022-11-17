import style from "./Games.module.scss";
import { SmallSearch } from "../SmallSearch/SmallSearch";
import { GameItems } from "../GameItems/GameItems";
import React from "react";
import { Dropdown } from "../Dropdown/Dropdown";

export const Games = () => {
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
        </div>
    </div>;
};