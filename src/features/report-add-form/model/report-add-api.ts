import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery, fetchPath } from "shared/config/api";
import { IReportForm } from "./types-payload";

export const reportAddApi = createApi({
  reducerPath: "ReportAddApi",
  baseQuery: baseQuery,
  endpoints: (build) => ({
    addNewReport: build.mutation<null, { form: IReportForm; token: string }>({
      query: ({ form, token }) => ({
        url: `point/${form.id}/reports`,
        method: "POST",
        body: form,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
});

export const { useAddNewReportMutation } = reportAddApi;

export const reportApiMiddleware = reportAddApi.middleware;
export const reportApiReducer = reportAddApi.reducer;
