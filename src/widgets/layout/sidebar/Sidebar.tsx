import classNames from "classnames";
import style from "./Sidebar.module.scss"
import { memo, useCallback, useState } from "react";

interface ISidebarProps {
    padding?: string,
    className?: string,
    classNameSidebar?: string
    children: React.ReactNode
}

export const Sidebar: React.FC<ISidebarProps> = memo((props) => {
    const {
        children,
        className,
        padding,
        classNameSidebar
    } = props

    const [isOpen, setOpen] = useState(false)
    const [isMounted, setMounted] = useState(false)

    const toggleHandle = useCallback(() => {
        isMounted ? setOpen(!isOpen) : setMounted(!isMounted)

        setTimeout(() => {
            isMounted ? setMounted(!isMounted) : setOpen(!isOpen)
        }, isMounted ? 300 : 100);

    }, [isOpen, isMounted])

    const mods = {[style.open]: isOpen}

    return(
        <div className={classNames(style.wrapper, className)}>
            <div className={style.hamburger}>
                <input 
                    onChange={toggleHandle} 
                    className={style.checkbox} 
                    type="checkbox" 
                    name="" id="" />
                <div className={style.hamburger_lines}>
                    <span className={classNames(style.line, style.line1)}></span>
                    <span className={classNames(style.line, style.line2)}></span>
                    <span className={classNames(style.line, style.line3)}></span>
                </div>  
            </div>
            {isMounted &&
                <div 
                    style={{padding}} 
                    className={classNames(style.sidebar, mods, classNameSidebar)}>
                        {children}
                </div>}
        </div>
    )
})