import { memo } from "react";
import style from "./Layout.module.scss"

import { Header } from "./header/Header";
import { Footer } from "./footer/Footer";
import { Sidebar } from "./sidebar/Sidebar";

interface ILayout {
    children: React.ReactNode
}

export const Layout: React.FC<ILayout> = memo(({children}) => {
    return(
        <div>
            <Header/>
            <div className={style.content}>
                <Sidebar>
                    sidebar
                </Sidebar>
                <div className={style.container}>
                    {children}
                </div>
            </div>
            <Footer/>
        </div>
    )
})