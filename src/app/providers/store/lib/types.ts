import { IAuthScheme } from "entities/auth";
import { placemarkTrashApiReducer } from "entities/placemark-trash";
import { reportApiReducer } from "entities/report";
import { authApiReducer } from "features/auth";
import { placemarkAddApiReducer } from "features/placemark-add-feature";

export interface IStore {
    authReducer: IAuthScheme,
    PlacemarkTrashApi: ReturnType<typeof placemarkTrashApiReducer>
    ReportApi: ReturnType<typeof reportApiReducer>
    AuthApi: ReturnType<typeof authApiReducer>
    PlacemarkAddApi: ReturnType<typeof placemarkAddApiReducer>
}
