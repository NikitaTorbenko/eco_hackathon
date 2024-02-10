// import { createApi } from "@reduxjs/toolkit/query/react";

// interface ILogin {
//   token: string;
// }

// interface LoginBody {
//   login: string;
//   password: string;
// }

// interface RegistrationBody {
//   login: string;
//   name: string;
//   password: string;
// }

// export const authApi = createApi({
//   reducerPath: "authApi",
//   baseQuery,
//   endpoints: (build) => ({
//     loginApi: build.mutation<ILogin, LoginBody>({
//       query: (body: LoginBody) => ({
//         url: `/login`,
//         method: "POST",
//         body,
//       }),
//     }),
//     registrationApi: build.mutation<LoginBody, RegistrationBody>({
//       query: (body: RegistrationBody) => ({
//         url: "/reg",
//         method: "POST",
//         body,
//       }),
//     }),
//   }),
// });
