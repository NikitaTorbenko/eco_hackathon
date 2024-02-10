import { type typeRouteProps } from "../types";
import { pathRoutes } from "shared/config/route-path";

import { HomePageLazy } from "pages/home-page";
import { AboutPageLazy } from "pages/about-page";
import { RegistrationPageLazy } from "pages/registration-page";
import { LoginPageLazy } from "pages/login-page";
import { TopPageLazy } from "pages/top-page";
import { NotFoundLazy } from "pages/not-found";
import PlacemarkPage from "pages/placemar-page/ui/PlacemarkPage";

export const Routes: typeRouteProps[] = [
  {
    path: pathRoutes.home.fullPath,
    element: <HomePageLazy />,
    isAuth: pathRoutes.home.isAuth,
  },
  {
    path: pathRoutes.about.fullPath,
    element: <AboutPageLazy />,
    isAuth: pathRoutes.about.isAuth,
  },
  {
    path: pathRoutes.placemark.fullPath,
    element: <PlacemarkPage />,
    isAuth: pathRoutes.placemark.isAuth,
  },
  {
    path: pathRoutes.top.fullPath,
    element: <TopPageLazy />,
    isAuth: pathRoutes.top.isAuth,
  },
  {
    path: pathRoutes.registration.fullPath,
    element: <RegistrationPageLazy />,
    isAuth: pathRoutes.registration.isAuth,
  },
  {
    path: pathRoutes.login.fullPath,
    element: <LoginPageLazy />,
    isAuth: pathRoutes.login.isAuth,
  },
  {
    path: pathRoutes["not-found"].fullPath,
    element: <NotFoundLazy />,
    isAuth: pathRoutes["not-found"].isAuth,
  },
];
