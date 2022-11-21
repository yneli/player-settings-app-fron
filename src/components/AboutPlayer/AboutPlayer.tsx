import style from "./AboutPlayer.module.scss";
export const AboutPlayer = () => {
    return <div className={style.container}>
        <div className={style.player}>
            <div>
            <img className={style.img} 
            src="https://specs.gg/assets/include/upload/image.php?name=11394343425f6378f9c16ef&t=2022-11-21%2016:29:09" alt="" />
                <div className={style.sens}>
                    Game: 33</div></div>
            <div className={style.who}>
                <h3 className={style.nick}>UBAH</h3>
                <h3 className={style.from}>RUSSIAN</h3>
                <h3 className={style.team}>NATUS VINCERE</h3></div>
        </div>
        <div className={style.device}>
            <div className={style.mouse}>
                <img src="" alt="" />
                <h3>GPX</h3>
            </div>
            <div className={style.headphone}>
                <h3>sennheiser momentum</h3>
                <img src="" alt="" />
            </div>
            <div className={style.mousepad}>
                <img src="" alt="" />
                <h3>ss qck+</h3>
            </div>
        </div>
    </div>;
};
