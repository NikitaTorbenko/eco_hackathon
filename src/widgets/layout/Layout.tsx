import { memo } from "react";
import style from "./Layout.module.scss";

import { Header } from "./header/Header";
import { Footer } from "./footer/Footer";
import { Sidebar } from "./sidebar/Sidebar";

interface ILayout {
  children: React.ReactNode;
  isContainer?: boolean
}

export const Layout: React.FC<ILayout> = memo((props) => {
    const {
        children,
        isContainer = true
    } = props
    
  return (
    <div>
      <Header />
      <div className={style.content}>
        <Sidebar>sidebar</Sidebar>
        <div className={style.wrap}>
          <div className={isContainer ? style.container : undefined}>{children}</div>
          <Footer />
        </div>
      </div>
    </div>
  );
});
