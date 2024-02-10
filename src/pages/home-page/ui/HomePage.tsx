import { Layout } from "widgets/index"
import style from "./HomePage.module.scss"
import { Map } from "entities/map"
import { IPlacemarkTrash } from "entities/placemark-trash/model/types"
import { PlacemarkTrash } from "entities/placemark-trash"

const testApi: IPlacemarkTrash[] = [
    {
        creatorId: 0,
        date: 'DSG',
        id: 1,
        images: [],
        pullutionLevel: 1,
        сoords: [47.232653, 39.724648]
    },
    {
        creatorId: 0,
        date: 'DSG',
        id: 1,
        images: [],
        pullutionLevel: 1,
        сoords: [47.222245, 39.650833]
    },
    {
        creatorId: 0,
        date: 'DSG',
        id: 1,
        images: [],
        pullutionLevel: 1,
        сoords: [47.222245, 39.680833]
    },
]

const HomePage = () => {
    return(
        <Layout isContainer={false}>
            <div className={style.page}>
                <Map zoom={8} className={style.map} coord={[46.095805, 36.901504]}>
                    {testApi.map(item => 
                        <PlacemarkTrash  coords={item.сoords} indexColor={item.pullutionLevel}/>)}
                </Map>
            </div>
        </Layout>
    )
}

export default HomePage