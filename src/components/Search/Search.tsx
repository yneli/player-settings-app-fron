import style from "./Search.module.scss";
import React from "react";
export const Search = () => {
    const [value, setValue] =  React.useState("");
    return <div className={style.container}>
        <input value={value} onChange={(e) => setValue(e.target.value)} className={style.search} type="text" placeholder="Search"/>
        {value.length < 1? <><img className={style.img} src="./assets/Search.svg" alt="" /></> : 
        <><img className={style.img} src="./assets/SearchWhite.svg" alt="" /></>}
    </div>;
};