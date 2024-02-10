import style from "./Header.module.scss"
import { memo } from "react";
import { Navbar } from "./navbar/Navbar";
import classNames from "classnames";

interface IHeaderProps {
    className?: string
}

export const Header: React.FC<IHeaderProps> = memo((props) => {
    const {
        className
    } = props

    return(
        <div className={classNames(style.header, className)}>
            <h1>ECO-Hackaton</h1>
            <Navbar width="600px"/>
        </div>
    )
})