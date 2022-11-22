import style from "./Sidebar.module.scss";
import { Sidebaritem } from "../SidebarItem/Sidebaritem";
import { SIDEBAR_ITEMS } from "./constants";
import React from "react";

export const Sidebar = () => {
    const [ target, setTarget ] = React.useState(".");
    return <div className={style.container}> <div className={style.sidebar}>
        <h2 className={style.menu}></h2>
        {SIDEBAR_ITEMS?.map(item => <Sidebaritem target={() => setTarget(item.path)} {...item} active={item.path === target}/>)}
    </div>
    </div>;
};