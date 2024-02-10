import { memo } from "react";
import { Header } from "./header/Header";
import { Footer } from "./footer/Footer";
import { Sidebar } from "./sidebar/Sidebar";
import { Navbar } from "./navbar/Navbar";

interface ILayout {
    children: React.ReactNode,
    className?: string
}

export const Layout: React.FC<ILayout> = memo((props) => {
    const {
        children,
        className
    } = props

    return(
        <div>
            <Header/>
            <Navbar/>
            <Sidebar/>
            <div className={className}>
                {children}
            </div>
            <Footer/>
        </div>
    )
})