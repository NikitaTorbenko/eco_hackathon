import { type IRoutePathProperties, enumPath } from './type'

export const pathRoutes: Record<enumPath, IRoutePathProperties> = {
  [enumPath.HOME]: {
    name: 'Главная',
    path: '/',
    fullPath: '/',
    isAuth: true
  },
  [enumPath.AUTH]: {
    path: '/auth',
    fullPath: '/auth',
    isAuth: false
  },
  [enumPath.NOTFOUND]: {
    path: '/not-found',
    fullPath: '/not-found',
    isAuth: false
  },
  [enumPath.TOP]: {
    name: 'Топ волонётров',
    path: '/top',
    fullPath: '/top',
    isAuth: true
  },
  [enumPath.ABOUT]: {
    name: 'О нас',
    path: '/about',
    fullPath: '/about',
    isAuth: true
  }
}
