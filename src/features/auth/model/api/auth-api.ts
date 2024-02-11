import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery, fetchPath } from "shared/config/api";

export const authApi = createApi({
  reducerPath: "AuthApi",
  baseQuery: baseQuery,
  endpoints: (build) => ({
    loginApi: build.mutation<string, ILoginBody>({
      query: (body: ILoginBody) => ({
        url: fetchPath.login,
        method: "POST",
        body,
      }),
    }),
    registrationApi: build.mutation<string, IRegistrationBody>({
      query: (body: IRegistrationBody) => ({
        url: fetchPath.registration,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
    useLoginApiMutation,
    useRegistrationApiMutation} = authApi

export const authApiMiddleware = authApi.middleware
export const authApiReducer = authApi.reducer