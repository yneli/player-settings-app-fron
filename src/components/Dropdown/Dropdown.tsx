import style from "./Dropdown.module.scss";
import React from "react";

export const Dropdown = () => {
    const [open, setOpen] = React.useState(false);
    const sortRef = React.useRef<HTMLInputElement>(null);
    const [title, setTitle] = React.useState("High to Low");
    const handleOpen = () => {
        setOpen(!open);};

    const handleMenuOne = () => {
        setTitle("Hight viewers");
        setOpen(false);};

    const handleMenuTwo = () => {
        setTitle("Low viewers");
        setOpen(false);};
    const handleOutsideClick = (event:any) => {
        const path = event.path || (event.composedPath && event.composedPath());
        if (!path.includes(sortRef.current)) {
            setOpen(false);
        }
    };    
    React.useEffect(() => {
        document.body.addEventListener("click", handleOutsideClick);
    }, []);
  
    return (
        <div ref={sortRef} className={style.dropdown}>
            <div className={style.switcher} onClick={handleOpen}>Viewers ({title})
                <img className={!open? style.active: ""} src="./assets/Switcher.svg" alt=""/></div>
            {open ? (
                <ul className={style.menu}>
                    <div className="menu-item">
                        <div onClick={handleMenuOne}>Hight viewers</div>
                    </div>
                    <div className="menu-item">
                        <div onClick={handleMenuTwo}>Low viewers</div>
                    </div>
                </ul>) : null}
        </div>
    );
};