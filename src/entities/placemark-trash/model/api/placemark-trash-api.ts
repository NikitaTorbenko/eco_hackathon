import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQuery, fetchPath } from 'shared/config/api'
import { IPlacemarkTrash } from '../types'

export const placemarkTrashApi = createApi({
  reducerPath: 'PlacemarkTrashApi',
  baseQuery,
  endpoints: (builder) => ({
    getPlacemarks: builder.query<IPlacemarkTrash, undefined>({
      query: () => `${fetchPath.point}`,
    })
  })
})

export const { useGetPlacemarksQuery, useLazyGetPlacemarksQuery } = placemarkTrashApi

export const placemarkTrashApiReducer = placemarkTrashApi.reducer
export const placemarkTrashApiMiddleware = placemarkTrashApi.middleware
