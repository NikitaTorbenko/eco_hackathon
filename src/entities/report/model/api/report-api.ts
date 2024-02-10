import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQuery, fetchPath } from 'shared/config/api'
import { IReport } from '../types'

export const reportApi = createApi({
  reducerPath: 'ReportApi',
  baseQuery,
  endpoints: (builder) => ({
    getReports: builder.query<IReport[], number>({
      query: (id) => `${fetchPath.report}/${id}`,
    }),
  })
})

export const { 
    useGetReportsQuery,
    useLazyGetReportsQuery} = reportApi

export const reportApiReducer = reportApi.reducer
export const reportApiMiddleware = reportApi.middleware