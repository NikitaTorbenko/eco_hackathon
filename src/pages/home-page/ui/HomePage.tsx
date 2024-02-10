import { Layout } from "widgets/index";
import style from "./HomePage.module.scss";
import { IPlacemarkTrash } from "entities/placemark-trash/model/types";
import { PlacemarkTrash } from "entities/placemark-trash";
import { Map, YMaps } from "react-yandex-maps";

const testApi: IPlacemarkTrash[] = [
  {
    creatorId: 0,
    date: "DSG",
    id: 1,
    images: [],
    pullutionLevel: 1,
    сoords: [47.232653, 39.724648],
  },
  {
    creatorId: 0,
    date: "DSG",
    id: 2,
    images: [],
    pullutionLevel: 1,
    сoords: [47.222245, 39.650833],
  },
  {
    creatorId: 0,
    date: "DSG",
    id: 3,
    images: [],
    pullutionLevel: 1,
    сoords: [47.222245, 39.680833],
  },
];

const HomePage = () => {
  return (
    <Layout isContainer={false}>
      <div className={style.page}>
        <YMaps>
          <Map
            className={style.map}
            defaultState={{ center: [46.095805, 36.901504], zoom: 8 }}
          >
            {testApi.map((item) => (
              <PlacemarkTrash
                key={item.id}
                coords={item.сoords}
                indexColor={item.pullutionLevel}
              />
            ))}
          </Map>
        </YMaps>
      </div>
    </Layout>
  );
};

export default HomePage;
