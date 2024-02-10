import { placemarkTrashApiReducer } from "entities/placemark-trash";

export interface IStore {
    PlacemarkTrashApi: ReturnType<typeof placemarkTrashApiReducer>
}
