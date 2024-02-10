import { trashLevels } from "shared/data/level-trash";
import { IReport } from "../model/types";
import style from "./ReportItem.module.scss"
import { memo } from "react";
import classNames from "classnames";

interface IReportItem extends Omit<IReport, 'id'> {
    onClick?: () => void,
    className?: string
}

export const ReportItem: React.FC<IReportItem> = memo((props) => {
    const {
        className,
        onClick,
        date,
        images,
        message,
        pullutionLevel,
        username
    } = props

    return(
        <div onClick={onClick} className={classNames(style.report, className)}>
            <div className={style.header}>
                <img src={images[0]} alt="image"/>
                <div className={style.info}>
                    <span className={style.name}>{username}</span>
                    <span>
                        <span>Уровень загрязнения:</span>
                        <div 
                            style={{backgroundColor: trashLevels[pullutionLevel].color}} 
                            className={style.color}/>
                        <span
                            style={{color: trashLevels[pullutionLevel || 0].color}}>
                                - {trashLevels[pullutionLevel].name}
                        </span>
                    </span>
                    <span>дата: {date}</span>
                </div>
            </div>
            <div className={style.description}>
                {message}
            </div>
        </div>
    )   
})