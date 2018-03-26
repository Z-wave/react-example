import { combineReducers } from "redux";

function indexList(state = {data: []}, action) {
    switch(action.type) {
        case "GET_INDEXLIST":
            let {params={}} = action
            
            if(params.more){
                let arr = [...state.data,...action.data]
                return {data:arr}
            }else{
                return {data:action.data}
            }
        default:
            return state
    }
}
function detail(state={},action) {
    switch(action.type){
        case "GET_DETAIL":
            return action.data
            
        default:
            return state;
    }
}

const Reducers = combineReducers({ indexList,detail });

export default Reducers;