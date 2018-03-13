export default function detailList(state={
    data: []
},action) {
    switch(action.type){
        case "DETAILLIST_SUCC":
            return {
                data: action.data.data
            };
        default:
            return state;
    }
}