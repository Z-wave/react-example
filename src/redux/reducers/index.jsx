import { combineReducers } from "redux";

function indexList(state = {data: []}, action) {
    switch(action.type) {
        case "GET_INDEXLIST":
            let {params={}} = action
            
            if(params.more){
                return {data:[...state.data,...action.data]}
            }else{
                return {data:action.data}
            }
        default:
            return state
    }
}

function topic(state={},action) {
    switch(action.type){
        case "GET_TOPIC":
            return action.data
        case "SET_UPS":
            let userId = localStorage.getItem('userId')

            state.replies.map((item) => {
                if(item.id == action.params.item.id){
                    if(action.params.action === 'up'){
                        item.ups.push(userId)
                    }else{
                        item.ups.map((v,i) => {
                            if(v == userId){
                                item.ups.splice(i,1)
                            }
                        })
                    }
                }
            })
            return Object.assign({},state)
        default:
            return state;
    }
}

function user(state={},action) {
    switch(action.type){
        case "GET_USER":
            return action.data
        default:
            return state;
    }
}

function messages(state={},action) {
    switch(action.type){
        case "GET_MESSAGES":
            return action.data
        default:
            return state;
    }
}

const Reducers = combineReducers({ indexList,topic,user, messages});

export default Reducers;