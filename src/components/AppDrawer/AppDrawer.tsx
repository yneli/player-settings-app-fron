import React from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import style from "./AppDrawer.module.scss";
import { Button } from "../Button/Button";

export const AppDrawer = ({path, children, title, size}: {path?: string,children?:any, title?:string, size?:string}) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState);
    };
    return <>
        {/* <Link   style={{ color: "inherit", textDecoration: "inherit"}} onClick={toggleDrawer} to="/login"> */}
        <Button onClick={toggleDrawer} >{title}</Button>
        <Drawer
            style={{backgroundColor:"#fff"}}
            open={isOpen}
            size={size}
            onClose={toggleDrawer}
            direction="right"
            className={style.drawer}>
            {children}
        </Drawer>
        {/* </Link> */}
    </>;
};