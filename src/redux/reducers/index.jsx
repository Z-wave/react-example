export default {
    indexList : (state=[],action) => {
        switch(action.type){
            case "GET_INDEXLIST":
                if(action.more){
                    return [...state,...action.data]
                }else{
                    return action.data
                }
            default:
                return state;
        }
    },
    detail : (state={data: {}},action) => {
        switch(action.type){
            case "GET_DETAIL":
                return action.data
                
            default:
                return state;
        }
    },
    user : (state={data: {}},action) => {
        switch(action.type){
            case "GET_USER":
                return action.data
                
            default:
                return state;
        }
    } 
}