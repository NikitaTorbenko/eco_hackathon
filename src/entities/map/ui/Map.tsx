import { Map as YandexMap, YMaps } from 'react-yandex-maps'
import style from "./Map.module.scss"
import { memo } from "react";
import classNames from 'classnames';

interface IMapProps{
    className?: string,
    children: React.ReactNode,
    coord: [number, number],
    zoom?: number,
}

export const Map: React.FC<IMapProps> = memo((props) => {
    const {
        children,
        coord,
        className,
        zoom = 9
    } = props
    return(
        <div className={classNames(className)}>
            <YMaps>
                <YandexMap className={style.map} defaultState={{ center: coord, zoom }}>
                    {children}
                </YandexMap>
            </YMaps>
        </div>
    )
})