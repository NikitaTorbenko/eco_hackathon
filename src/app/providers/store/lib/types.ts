import { IAuthScheme } from "entities/auth";
import { placemarkTrashApiReducer } from "entities/placemark-trash";
import { reportApiReducer } from "entities/report";

export interface IStore {
    authReducer: IAuthScheme,
    PlacemarkTrashApi: ReturnType<typeof placemarkTrashApiReducer>
    ReportApi: ReturnType<typeof reportApiReducer>
}
