import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit'
import { type IStore } from './types'
import { placemarkTrashApiMiddleware, placemarkTrashApiReducer } from 'entities/placemark-trash'
import { authReducer } from 'entities/auth'
import { reportApiMiddleware, reportApiReducer } from 'entities/report'
import { authApiMiddleware, authApiReducer } from 'features/auth'
import { placemarkAddApiMiddleware, placemarkAddApiReducer } from 'features/placemark-add-feature'

const rootReducers: ReducersMapObject<IStore> = {
  authReducer: authReducer,
  PlacemarkTrashApi: placemarkTrashApiReducer,
  ReportApi: reportApiReducer,
  AuthApi: authApiReducer,
  PlacemarkAddApi: placemarkAddApiReducer
}

export const store = configureStore({
  reducer: rootReducers,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApiMiddleware,
              placemarkAddApiMiddleware,
              placemarkTrashApiMiddleware,
              reportApiMiddleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
