import { IoMdClose } from "react-icons/io";
import style from "./Modal.module.scss";

interface ModalProps {
  children: string | JSX.Element;
  title?: string;
  classModal?: string;
}

export const Modal = ({ children, title, classModal }: ModalProps) => {
  return (
    <div className={style.modalWrap}>
      <div className={`${style.modal} ${classModal}`}>
        <div className={style.modalTop}>
          <IoMdClose className={style.icon} />
          {title && <h3 className={style.modalTitle}>{title}</h3>}
        </div>
        {children}
      </div>
    </div>
  );
};
