import { Layout } from "widgets/index"
import style from "./HomePage.module.scss"
import { Map, Placemark, YMaps } from "react-yandex-maps"
import { Box, Button, useToast } from "@chakra-ui/react"
import { useCallback, useState } from "react"
import { useAddNewPlacemarkMutation } from "features/placemark-add-feature"
import { useAppSelector } from "shared/lib/hooks/useAppSelector"

const HomePage = () => {
    const [isAddNewPlacemark, setIsAddNewPlacemark] = useState(false)
    const [coords, setCoords] = useState<[number, number]>([0, 0])
    const toast = useToast()
    const token = useAppSelector(state => state.authReducer.token)
    const [addNewPlacemark, result] = useAddNewPlacemarkMutation()

    const addNewPlacemarkHandle = useCallback((coords: [number, number]) => {
        addNewPlacemark({
            coords: coords,
            token: token ?? ''
        })
        setIsAddNewPlacemark(false)
    }, [coords, token])

    const onClickMapHandle = useCallback((e: any) => {
        if(isAddNewPlacemark){
            const coord: [number, number] = e.get('coords') || e._sourceEvent.originalEvent.coords
            setCoords(coord)
            addNewPlacemarkHandle(coord)
        }
    }, [isAddNewPlacemark, coords])

    const getMyCoordsHandle = useCallback(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
            (position) => {
                setCoords([
                    position.coords.latitude, 
                    position.coords.longitude]);
                addNewPlacemarkHandle([
                    position.coords.latitude, 
                    position.coords.longitude])
            },
            (error) => {
                console.error('Error getting geolocation:', error);
            }
            );
        } else {
            console.error('Geolocation is not supported by this browser.');
        }
    }, [navigator.geolocation, coords])

    return(
        <Layout isContainer={false}>
            <div className={style.page}>
                <YMaps>
                    <Map 
                        onClick={onClickMapHandle}
                        className={style.map} 
                        defaultState={{ center: [46.095805, 36.901504], zoom: 8 }}>
                            <Placemark geometry={coords}/>
                    </Map>
                </YMaps>
                <Button
                    onClick={() => setIsAddNewPlacemark(!isAddNewPlacemark)} 
                    colorScheme="green">
                    {isAddNewPlacemark ? 'Выберите точку на карте' : 'Добавить точку'}
                </Button>
                {isAddNewPlacemark &&
                    <Button onClick={getMyCoordsHandle} colorScheme="yellow">
                        Моё местоположение
                    </Button>}
            </div>
            {result.data && toast({
                position: 'top-left',
                render: () => (
                    <Box color='white' p={4} bg='green.500'>
                        Точка сохранена успешна
                    </Box>
                ),
            })}

        </Layout>
    )
}

export default HomePage;
