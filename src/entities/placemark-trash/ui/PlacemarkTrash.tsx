import { Placemark } from "react-yandex-maps"
import { memo } from "react"
import { trashLevels } from "shared/data/level-trash"

interface IPlacemarkTrash {
    iconImageSize?: [number, number],
    iconImageOffset?: [number, number],
    indexColor?: number,
    coords: [number, number]
}

export const PlacemarkTrash: React.FC<IPlacemarkTrash> = memo((props) => {
    const {
        iconImageSize = [30, 30],
        indexColor = 0,
        iconImageOffset = [-15, -30],
        coords
    } = props

    const placemarkOptions = {
        preset: "islands#circleIcon",
        iconImageSize: iconImageSize,
        iconImageOffset: iconImageOffset,
        iconColor: trashLevels[indexColor].color
      };

    return(
        <Placemark
            geometry={coords} 
            options={placemarkOptions}/>
    )
})