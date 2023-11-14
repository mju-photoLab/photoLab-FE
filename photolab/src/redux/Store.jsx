import { configureStore, createSlice } from '@reduxjs/toolkit'
import homeData from '../temporaryData/Home.json'
import competitionList from '../temporaryData/CompetitionList.json'
import competitionDetail from '../temporaryData/CompetitionDetail.json'
import imageDetail from '../temporaryData/imageDetail.json'

const homeSlice = createSlice({
  name: 'home',
  initialState : homeData,
  reducers: {}
})
const competitionListSlice = createSlice({
  name: 'competitionList',
  initialState: competitionList,
  reducers: {}
})
const competitionDetailSlice = createSlice({
  name: 'competitionDetail',
  initialState: competitionDetail,
  reducers: {}
})
const imageDetailSlice = createSlice({
  name: 'imageDetail',
  initialState: imageDetail,
  reducers: {}
})
export const { reducer: homeReducer } = homeSlice
export const { reducer: competitionListReducer } = competitionListSlice
export const { reducer: competitionDetailReducer } = competitionDetailSlice
export const { reducer: imageDetailReducer } = imageDetailSlice

const store = configureStore({
  reducer: {
    home: homeReducer,
    competitionList: competitionListReducer,
    competitionDetail: competitionDetailReducer,
    imageDetail: imageDetailReducer
  }
})

export default store