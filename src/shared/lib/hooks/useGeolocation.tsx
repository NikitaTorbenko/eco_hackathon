import { useEffect, useState } from "react";

interface ICoord {
    latitude: number, 
    longitude: number
}

export const useGeolocation = () => {
    const [coords, setCoords] = useState<ICoord>({ latitude: 0, longitude: 0 });

    useEffect(() => {
        const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
            (position) => {
                setCoords({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
                });
            },
            (error) => {
                console.error('Error getting geolocation:', error);
            }
            );
        } else {
            console.error('Geolocation is not supported by this browser.');
        }
        };

        getLocation();
    }, []);

    return {coords}
}