import style from "./Games.module.scss";
import { SmallSearch } from "../SmallSearch/SmallSearch";
import { GameItems } from "../GameItems/GameItems";
export const Games = () => {
    return <div className={style.games}>
        <div className={style.sorted}>
            <div className={style.sortbar}>
                <h3>Sort by</h3>
                <div className={style.switcher}><p>Viewers (High to Low)</p>
                    <img src="./assets/Switcher.svg" alt=""/></div>
            </div>
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