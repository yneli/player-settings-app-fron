import { GameItemProps } from "../../types/gameItems";
import style from "./GameItems.module.scss";
import { Link } from "react-router-dom";
export const GameItems = ({ image, title, path }:GameItemProps) => {
    return <div className={style.gameitems}>
        <Link className={style.link} to={`/${path}`}>
        <img src={image} alt="" />
        </Link>
    </div>;
};