import axios from 'axios';

export function setPageTitle (data) {
    return (dispatch, getState) => {
      dispatch({ type: 'SET_PAGE_TITLE', data: data })
    }
}
  
export function setIndexList (data) {
    return (dispatch, getState) => {
        axios.get('/v1/topics',{
            params:data
        }).then(data => {
            if(data.status == 200){
                dispatch({ type: 'SET_INDEX_LIST', data: data.data.data })
                global.isLoad = true
            }
        })
    }
}
