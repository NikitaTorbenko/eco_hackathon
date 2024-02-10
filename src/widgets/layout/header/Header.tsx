import style from "./Header.module.scss"
import { memo } from "react";

export const Header = memo(() => {
    return(
        <div className={style.header}>
            <h1>
                ECO-Hackaton
            </h1>
        </div>
    )
})