import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit'
import { type IStore } from './types'
import { placemarkTrashApiMiddleware, placemarkTrashApiReducer } from 'entities/placemark-trash'

const rootReducers: ReducersMapObject<IStore> = {
  PlacemarkTrashApi: placemarkTrashApiReducer
}

export const store = configureStore({
  reducer: rootReducers,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(placemarkTrashApiMiddleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
