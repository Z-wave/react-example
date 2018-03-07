import { combineReducers } from 'redux'
import defaultState from './state.jsx'

function pageTitle (state = defaultState.pageTitle, action) {
  switch (action.type) {
    case 'SET_PAGE_TITLE':
      return action.data
    default:
      return state
  }
}

function infoList (state = defaultState.infoList, action) {
  switch (action.type) {
    case 'SET_INFO_LIST':
      return action.data
    default:
      return state
  }
}

// 导出所有reducer
export default combineReducers({
    pageTitle,
    infoList
})