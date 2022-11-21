import style from "./CardPlayer.module.scss";
import { Link } from "react-router-dom";
export const CardPlayer = () => {
    return <Link style={{ color: "inherit", textDecoration: "inherit"}} to="./ubah"><div className={style.container}>
        <img src="./assets/ubah.png" alt="" />
        <h4>ubah</h4>
        <h4>Team</h4>   
    </div>
    </Link>;
};