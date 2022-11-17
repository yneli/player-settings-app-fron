import { ReactNode } from "react";
import style from "./Layout.module.scss";

export const Layout = ({ header, children }: { header?: ReactNode, children?: ReactNode, } ) => {
    return <>
        {header}
        <div className={style.container}>
            {children}
        </div>
    </>;

};