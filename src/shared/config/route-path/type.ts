export interface IRoutePathProperties {
  name?: string;
  path: string;
  fullPath: string;
  isAuth: boolean;
}

export enum enumPath {
  HOME = "home",
  AUTH = "auth",
  NOTFOUND = "not-found",
  TOP = "top",
  REGISTRATION = "registration",
  LOGIN = "login",
  ABOUT = "about",
}
