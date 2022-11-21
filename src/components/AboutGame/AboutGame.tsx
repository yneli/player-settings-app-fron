import style from "./AboutGame.module.scss";
import { SmallSearch } from "../SmallSearch/SmallSearch";
import { CardPlayer } from "../CardPlayer/CardPlayer";
export const AboutGame = () => {
    return <div className={style.container}>
        <div className={style.about}><h3 className={style.title}>PLAYERUNKNOWN'S BATTLEGROUNDS</h3>
        <img src="./assets/img4.png" alt="" />
        </div>
        <div className={style.search}>
            <SmallSearch/>
        </div>
        <div className={style.cards}>
            <CardPlayer></CardPlayer>
            <CardPlayer></CardPlayer>
            <CardPlayer></CardPlayer>

        </div>
    </div>;
};