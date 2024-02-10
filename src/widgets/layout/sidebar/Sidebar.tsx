import style from "./Sidebar.module.scss"
import { memo } from "react";

export const Sidebar = memo(() => {
    return(
        <div className={style.sidebar}>
            sidebar
        </div>
    )
})