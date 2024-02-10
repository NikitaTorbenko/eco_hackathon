import { type IRoutePathProperties, enumPath } from "./type";

export const pathRoutes: Record<enumPath, IRoutePathProperties> = {
  [enumPath.HOME]: {
    name: "Главная",
    path: "/",
    fullPath: "/",
    isAuth: true,
  },
  [enumPath.AUTH]: {
    path: "/auth",
    fullPath: "/auth",
    isAuth: false,
  },
  [enumPath.NOTFOUND]: {
    path: "/not-found",
    fullPath: "/not-found",
    isAuth: false,
  },
  [enumPath.TOP]: {
    name: "Топ волонётров",
    path: "/top",
    fullPath: "/top",
    isAuth: true,
  },
  [enumPath.REGISTRATION]: {
    path: "/registration",
    fullPath: "/registration",
    isAuth: false,
  },
  [enumPath.LOGIN]: {
    path: "/login",
    fullPath: "/login",
    isAuth: false,
  },
  [enumPath.ABOUT]: {
    name: "О нас",
    path: "/about",
    fullPath: "/about",
    isAuth: true,
  },
};
