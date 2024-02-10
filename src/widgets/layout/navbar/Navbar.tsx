import { Link } from "react-router-dom";
import style from "./Navbar.module.scss"
import { memo } from "react";
import { pathRoutes } from "shared/config/route-path";

export const Navbar = memo(() => {
    return (
        <div className={style.navbar}>
            <Link to={pathRoutes.home.path}>{pathRoutes.home.name}</Link>
            <Link to={pathRoutes.about.path}>{pathRoutes.about.name}</Link>
            <Link to={pathRoutes.top.path}>{pathRoutes.top.name}</Link>
        </div>
    )
})