import { Link } from "react-router-dom";
import style from "./Navbar.module.scss"
import { CSSProperties, memo } from "react";
import { pathRoutes } from "shared/config/route-path";
import classNames from "classnames";

interface INavbarProps{
    width?: string,
    className?: string
}

export const Navbar: React.FC<INavbarProps> = memo((props) => {
    const {
        width,
        className
    } = props

    const cssStyle: CSSProperties = {
        width: width ?? '100%',
        maxWidth: width
    }
    
    return (
        <div style={cssStyle} className={classNames(style.navbar, className)}>
            <Link to={pathRoutes.home.path}>{pathRoutes.home.name}</Link>
            <Link to={pathRoutes.about.path}>{pathRoutes.about.name}</Link>
            <Link to={pathRoutes.top.path}>{pathRoutes.top.name}</Link>
        </div>
    )
})