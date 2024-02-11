import { Stack, Text } from "@chakra-ui/layout";
import { Slider, SliderFilledTrack, SliderThumb, SliderTrack } from "@chakra-ui/slider";
import React, { memo, useCallback } from "react";

interface IPlacemarkSortForm {
    getSortValue: (value: number) => void
}

export const PlacemarkSortForm: React.FC<IPlacemarkSortForm> = memo(({getSortValue}) => {
    const changeSliderHandle = useCallback((val: number) => {
        getSortValue(Math.round(val / 9))
    }, [])

    return(
        <Stack width='80%' padding={2} borderRadius={20} border='2px solid #E5E5E590' spacing={5} direction='row'>
            <Text>Филтрация:</Text>
            <Slider onChange={(val) => changeSliderHandle(val)} aria-label='slider-ex-1' defaultValue={4} max={27}>
            <SliderTrack>
                <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
            </Slider>
        </Stack>
    )
})