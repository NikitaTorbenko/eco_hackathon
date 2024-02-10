import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "shared/config/api";
import { ILogin } from "./types-payload";

export const authApi = createApi({
  reducerPath: "AuthApi",
  baseQuery: baseQuery,
  endpoints: (build) => ({
    loginApi: build.mutation<ILogin, ILoginBody>({
      query: (body: ILoginBody) => ({
        url: `/login`,
        method: "POST",
        body,
      }),
    }),
    registrationApi: build.mutation<ILogin, IRegistrationBody>({
      query: (body: IRegistrationBody) => ({
        url: "/reg",
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