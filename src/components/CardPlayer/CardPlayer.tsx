import style from "./CardPlayer.module.scss";
import { Link } from "react-router-dom";
export const CardPlayer = ({nickname, url, id}: {nickname?:string,url?:string,id?:string,}) => {
    return <Link style={{ color: "inherit", textDecoration: "inherit"}} to="./ubah"><div className={style.container}>
        <img src={url} alt="" />
        <h4>{nickname}</h4>
        <h4>Team</h4>   
    </div>
    </Link>;
};