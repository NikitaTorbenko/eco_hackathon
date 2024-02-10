import { Placemark } from "react-yandex-maps"
import { memo } from "react"

interface IPlacemarkTrash {
    iconImageSize?: [number, number],
    iconImageOffset?: [number, number],
    indexColor?: number,
    coords: [number, number]
}

const colors: string[] = [
    'gray',
    'green',
    'yellow',
    'red'
]

export const PlacemarkTrash: React.FC<IPlacemarkTrash> = memo((props) => {
    const {
        iconImageSize = [30, 30],
        indexColor = 0,
        iconImageOffset = [-15, -30],
        coords
    } = props

    const placemarkOptions = {
        preset: "islands#circleIcon",
        iconImageSize: iconImageSize, // размеры иконки
        iconImageOffset: iconImageOffset, // смещение иконки
        iconColor: colors[indexColor]
      };

    return(
        <Placemark
            geometry={coords} 
            options={placemarkOptions}/>
    )
})