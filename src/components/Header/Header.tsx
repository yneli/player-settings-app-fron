import style from "./Header.module.scss";
import { Search } from "../Search/Search";
import { AppDrawer } from "../AppDrawer/AppDrawer";
import { Login } from "../Login/Login";
import { Registration } from "../Registration/Registration";

export const Header = () => {  
    return <>
        <div className={style.header}>
            <h1 className={style.title}>Settings Store</h1>
            <Search/>
            <div className={style.headerHud}>
                <div className={style.buttons}>
                    <AppDrawer size={"250px"} title={"Sign In"}><Login/></AppDrawer>
                    <AppDrawer size={"300px"} title={"Registration"}><Registration/></AppDrawer>
                </div>
                {/* <img className={style.img} src="./assets/Avatar.svg" alt="" /> */}
            </div>
        </div>
    </>;
};