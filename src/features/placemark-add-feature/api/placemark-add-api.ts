import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery, fetchPath } from "shared/config/api";

export const placemarkAddApi = createApi({
  reducerPath: "PlacemarkAddApi",
  tagTypes: ['placemark'],
  baseQuery: baseQuery,
  endpoints: (build) => ({
    addNewPlacemark: build.mutation<null, {coords: [number, number], token: string}>({
      query: ({coords, token}) => ({
        url: fetchPath.point,
        method: "POST",
        body: coords,
        headers: {
            Authorization: `Bearer ${token}`
        }
      }),
      invalidatesTags: ['placemark']
    })
  }),
});

export const {useAddNewPlacemarkMutation} = placemarkAddApi

export const placemarkAddApiMiddleware = placemarkAddApi.middleware
export const placemarkAddApiReducer = placemarkAddApi.reducer