import {
    UPDATE_CURRENT_PAGE,
    UPDATE_LIST_SIZE,
    UPDATE_SEARCH_TEXT
  } from './../action/index'

const inailValue = {
    currentPage:1,
    listSize:0,
    userSearchText:""
}

const userReducer = (state=inailValue,action) =>{
    if(action.type===UPDATE_CURRENT_PAGE){
        return {
           ...state,currentPage:action.payload
        }
    }else if(action.type===UPDATE_SEARCH_TEXT){
        return {
            ...state,userSearchText:action.payload
         }
    }else if(action.type===UPDATE_LIST_SIZE){
        return {
            ...state,listSize:action.payload
        }
    }
    return state;
}


export default userReducer;