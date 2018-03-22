export default (state=[],action) => {
    switch(action.type){
        case "GET_INDEXLIST":
            if(action.first){
                return [...state,...action.data]
            }else{
                return action.data
            }
        default:
            return state;
    }
}