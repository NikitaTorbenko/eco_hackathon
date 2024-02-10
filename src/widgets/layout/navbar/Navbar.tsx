import style from "./Navbar.module.scss"
import { memo } from "react";

export const Navbar = memo(() => {
    return (
        <div className={style.navbar}>
            Navbar
        </div>
    )
})