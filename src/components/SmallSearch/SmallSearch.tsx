import style from "./SmallSearch.module.scss";
export const SmallSearch = () => {
    return <div className={style.smallsearch}>
        <img className={style.img} src="./assets/SmallSearch.svg" alt="" />
        <input type="text" className={style.search} placeholder="Search"/>
    </div>;
};