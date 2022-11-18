import style from "./Button.module.scss";
import React, { MouseEvent } from "react";
import { ReactNode } from "react";
export const Button = ({text, children, onClick }:{text?:string, children?: ReactNode, onClick?: any }) => {
    return <div onClick={onClick} className={style.button}>
        {children}
        {text}
    </div>;
};