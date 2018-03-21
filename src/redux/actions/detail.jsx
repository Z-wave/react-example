export default function detailList(state={data: {}},action) {
    switch(action.type){
        case "GET_DETAIL":
            return action.data
            
        default:
            return state;
    }
}