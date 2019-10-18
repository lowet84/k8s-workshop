import { createStore, Action } from 'redux'
import { combineReducers } from 'redux'
import { common } from './commonReducer'

const rootReducer = combineReducers({ common })

const store = createStore(rootReducer)

export default store

export type RootState = ReturnType<typeof store.getState>
