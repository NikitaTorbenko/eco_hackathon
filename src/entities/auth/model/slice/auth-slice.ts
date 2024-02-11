import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type IAuthScheme } from '../types/authscheme.ts'
import { AUTH_DATA_KEY } from 'shared/config/local-storage'

const initialState: IAuthScheme = {
  token: undefined
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    saveAuthData (state, action: PayloadAction<{token: string, isRememberMy: boolean}>) {
      if(action.payload.isRememberMy)
        localStorage.setItem(AUTH_DATA_KEY, JSON.stringify(action.payload))

      state.token = action.payload.token
    },
    initAuthData (state) {
      const authData = localStorage.getItem(AUTH_DATA_KEY) ?? 'undefined'
      if (authData !== 'undefined') {
        state.token = JSON.parse(authData).token
      }
    },
    removeAuthData (state) {
      localStorage.removeItem(AUTH_DATA_KEY)
      state.token = undefined
    }
  }
})

export const authReducer = authSlice.reducer
export const { saveAuthData, removeAuthData, initAuthData } = authSlice.actions
