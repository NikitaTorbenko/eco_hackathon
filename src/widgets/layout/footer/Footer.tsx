import style from "./Footer.module.scss"
import { memo } from "react";

export const Footer = memo(() => {
    return(
        <div className={style.footer}>
            footer
        </div>
    )
})