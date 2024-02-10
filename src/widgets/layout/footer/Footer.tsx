import style from "./Footer.module.scss";
import { FaGithub, FaTelegram } from "react-icons/fa";
import { SlSocialVkontakte } from "react-icons/sl";
import { memo } from "react";
import { Link } from "react-router-dom";
import { contacts } from "./model";

export const Footer = memo(() => {
  return (
    <div className={style.footer}>
      <div className={`container ${style.footerContainer}`}>
        {contacts.map((el) => (
          <div className={style.footerItem} key={el.name}>
            <h3 className={style.title}>{el.name}</h3>
            {/* <img src={el.img} alt="" /> */}
            <h4 className={style.subtitle}>{el.job}</h4>
            <div className={style.contacts}>
              <Link to={el.git}>
                <FaGithub className={style.icon} />
              </Link>
              <Link to={el.tg}>
                <FaTelegram className={style.icon} />
              </Link>
              <Link to={el.vk}>
                <SlSocialVkontakte className={style.icon} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});
