import {
  UPDATE_CURRENT_PAGE,
  UPDATE_LIST_SIZE,
  UPDATE_SEARCH_TEXT
} from './index'

export const updateCurrentPage = (currentPage) => dispatch => {
  return dispatch({
    type: UPDATE_CURRENT_PAGE,
    payload: currentPage
  });
}
export const updateListSize = (size) => dispatch => {
  console.log("=update==",size)
  return dispatch({
    type: UPDATE_LIST_SIZE,
    payload: size
  });
}

export const updateSearchText = (userInputText) => dispatch => {
  return dispatch({
    type: UPDATE_SEARCH_TEXT,
    payload: userInputText
  });
}

