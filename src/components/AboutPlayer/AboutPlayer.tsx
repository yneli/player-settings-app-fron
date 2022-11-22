import style from "./AboutPlayer.module.scss";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { fetchSettings } from "../../redux/slices/games/gamesSlice";
import { useLocation } from "react-router-dom";

export const AboutPlayer = () => {
    let location = useLocation();
    let params = location.pathname.split("/");
    const disptach = useAppDispatch();
    React.useEffect(() => {
        disptach(fetchSettings({game:params[1], tagName:params[2]}));
    },[params[1]]);
    const devices = useAppSelector((state) => state.games.settingsItem.devicesSettings); 
    const player = useAppSelector((state) => state.games.settingsItem.playerSettings); 
    let parsData = JSON.parse(devices);
    console.log(parsData);
    console.log(player);
    
    return <div className={style.container}>
        {player? <><div className={style.player}>
            <div className={style.imgContainer}>
                <img className={style.img} src={player.gamer_url} alt="" />
                <div className={style.text}>
                    <h3>{player.nickname}</h3>
                    <h3>{player.p_name}</h3>
                    <h3>{player.p_name}</h3>
                </div>
            </div>
            <div className={style.sens}>
                <div className={style.dpi}>
                    <h3>DPI:</h3>
                    <h3>{parsData.dpi}</h3></div>
                <div className={style.gameSens}>
                    <h3>Game:</h3>
                    <h3>{parsData.mouse_speed}</h3>
                </div>
            </div>
        </div>
        <div className={style.devices}>
            <div className={style.mouse}>
                <img className={style.imgAbout} src={player.m_url} alt="" />
                <h3>{player.m_name}</h3>
            </div>
            <div className={style.mouse}>
                <img className={style.imgAbout} src={player.s_url} alt="" />
                <h3>{player.s_name}</h3>
            </div>
            <div className={style.mouse}>
                <img className={style.imgAbout} src={player.k_url} alt="" />
                <h3>{player.k_name}</h3>
            </div>
            <div className={style.mouse}>
                <img className={style.imgAbout} src={player.p_url} alt="" />
                <h3>{player.p_name}</h3>
            </div>
           
        </div></>: "loading"}
    </div>;
};


