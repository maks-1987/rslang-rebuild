/* eslint-disable import/no-named-as-default */
/* eslint-disable import/prefer-default-export */
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import wordDataReducer from './reducers/wordSlice'
import userReducer from './reducers/userSlice'

const rootReducer = combineReducers({
  wordDataReducer,
  userReducer,
})
/* eslint-disable implicit-arrow-linebreak */
export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
    devTools: true,
  })

export type RootReducerState = ReturnType<typeof rootReducer>
export type AppStoreState = ReturnType<typeof setupStore>
export type AppDispatchState = AppStoreState['dispatch']
