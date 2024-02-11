import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQuery, fetchPath } from 'shared/config/api'
import { IPlacemarkTrash } from '../types'

export const placemarkTrashApi = createApi({
  reducerPath: 'PlacemarkTrashApi',
  baseQuery,
  endpoints: (builder) => ({
    getPlacemarks: builder.query<IPlacemarkTrash[], number>({
      query: (level) => `${fetchPath.point}/${level}`,
    }),
    getPlacemarkById: builder.query<IPlacemarkTrash, number>({
      query: (id) => `${fetchPath.point}/${id}`,
    }),
  })
})

export const { 
  useGetPlacemarksQuery, 
  useLazyGetPlacemarksQuery,
  useGetPlacemarkByIdQuery,
  useLazyGetPlacemarkByIdQuery } = placemarkTrashApi

export const placemarkTrashApiReducer = placemarkTrashApi.reducer
export const placemarkTrashApiMiddleware = placemarkTrashApi.middleware
