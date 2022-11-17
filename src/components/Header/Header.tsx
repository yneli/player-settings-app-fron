import style from "./Header.module.scss";
import { Search } from "../Search/Search";


export const Header = () => {
    return <>
        <div className={style.header}>
            <h2></h2>
            <div className={style.headerHud}>
                <Search/>
                <img  src="./assets/Avatar.svg" alt="" />
            </div>
        </div>
    </>;
};