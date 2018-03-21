export default function topList(state=[],action) {
    switch(action.type){
        case "GET_INDEXLIST":
            return action.data
        default:
            return state;
    }
}