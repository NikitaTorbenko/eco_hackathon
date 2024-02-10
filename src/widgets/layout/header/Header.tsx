import style from "./Header.module.scss"
import { memo, useCallback, useEffect, useState } from "react";
import { Navbar } from "../navbar/Navbar";
import classNames from "classnames";

interface IHeaderProps {
    className?: string
}

export const Header: React.FC<IHeaderProps> = memo((props) => {
    const {
        className
    } = props

    const [isShowNavbar, setShowNavbar] = useState(true)

    const resizeInnerWidthHandle = useCallback(() => {
        window.innerWidth < 700 ? setShowNavbar(false) : setShowNavbar(true)
    }, [])

    useEffect(() => {
        resizeInnerWidthHandle()
        window.addEventListener('resize', resizeInnerWidthHandle)
    
        return () => {
          window.removeEventListener('resize', resizeInnerWidthHandle)
        }
    }, [window])

    return(
        <div className={classNames(style.header, className)}>
            <h1>ECO-Hackaton</h1>
            {isShowNavbar &&
                <Navbar width="400px" className={style.navbar}/>}
        </div>
    )
})