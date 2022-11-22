import { SidebarItemProps } from "../../types/sidebar";
import clsx from "clsx";
import style from "./Sidebaritem.module.scss";
import { Link } from "react-router-dom";
import React from "react";

export const Sidebaritem = ({ 
    title, path, icon, nested, active, target }: 
    SidebarItemProps & { active?: boolean, target?: React.MouseEventHandler<HTMLDivElement> }) => {
    return <>
        <Link style={{ color: "inherit", textDecoration: "inherit"}} className={style.link} to={path}>
            <div onClick={target} className={clsx(style.sidebarItem, {
                [style.active]: active,
            })}>
                <img src={icon} />
                <h5 className={style.title}>{title}</h5> 
            </div>        
        </Link>
</>;
};