import { configureStore, createSlice } from '@reduxjs/toolkit'
import homeData from '../temporaryData/Home.json'
import competitionList from '../temporaryData/CompetitionList.json'
import competitionDetail from '../temporaryData/CompetitionDetail.json'
import imageDetail from '../temporaryData/imageDetail.json'
import exhibitionData from '../temporaryData/Exhibition.json'
import exhibitionListData from '../temporaryData/ExhibitionList.json'
import userListData from '../temporaryData/UserList.json'

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
const exhibitionDataSlice = createSlice({
  name: 'exhibitionData',
  initialState: exhibitionData,
  reducers:{}
})
const exhibitionListDataSlice = createSlice({
  name: 'exhibitionListData',
  initialState: exhibitionListData,
  reducers: {}
})
const userListDataSlice = createSlice({
  name: 'userList',
  initialState: userListData,
  reducers: {}
})
export const { reducer: homeReducer } = homeSlice
export const { reducer: competitionListReducer } = competitionListSlice
export const { reducer: competitionDetailReducer } = competitionDetailSlice
export const { reducer: imageDetailReducer } = imageDetailSlice
export const { reducer: exhibitionDataReducer } = exhibitionDataSlice
export const { reducer: exhibitionListDataReducer } = exhibitionListDataSlice
export const { reducer: userListDataReducer } = userListDataSlice

const store = configureStore({
  reducer: {
    home: homeReducer,
    competitionList: competitionListReducer,
    competitionDetail: competitionDetailReducer,
    imageDetail: imageDetailReducer,
    exhibitionData: exhibitionDataReducer,
    exhibitionListData: exhibitionListDataReducer,
    userListData: userListDataReducer
  }
})

export default store