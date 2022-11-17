import { GameItemProps } from "../../types/gameItems";
import style from "./GameItems.module.scss";
export const GameItems = ({ image, title, path}:GameItemProps) => {
    return <div className={style.gameitems}>
        <img src="./assets/pubg.jpg" alt="" />
    </div>;
};