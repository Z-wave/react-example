import { combineReducers } from "redux";

let init = {data: []}

function indexList(state = init, action) {
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
const Reducers = combineReducers({ indexList });

export default Reducers;