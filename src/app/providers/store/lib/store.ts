import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit'
import { type IStore } from './types'

const rootReducers: ReducersMapObject<IStore> = {
  foo: undefined
}

export const store = configureStore({
  reducer: rootReducers,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat()
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
