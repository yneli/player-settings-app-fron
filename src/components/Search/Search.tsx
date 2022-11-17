import style from "./Search.module.scss";
export const Search = () => {
    return <div className={style.container}>
        <input className={style.search} type="text" placeholder="Search"/>
        <img className={style.img} src="./assets/Search.svg" alt="" />
    </div>;
};