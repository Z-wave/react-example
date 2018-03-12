export default function topList(state={
    loading: true,
    data: []
},action) {
    switch(action.type){
        case "TOPLIST_SUCC":
            return {
                loading: false,
                data: action.data.data
            };
        default:
            return state;
    }
}