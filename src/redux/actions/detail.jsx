export default (state={data: {}},action) => {
    switch(action.type){
        case "GET_DETAIL":
            return action.data
            
        default:
            return state;
    }
}