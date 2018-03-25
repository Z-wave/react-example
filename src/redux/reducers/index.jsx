export default (state, action) => {
    console.log(action);
    switch(action.type) {
        case 'GET_START':
            return {indexList:[], status: 'GET_START' }
        case "GET_INDEXLIST":
            let {params={}} = action
            if(params.more){
                let arr = [...state,...action.data]
                return {indexList:arr, status: 'LOADING_STATE' }
            }else{
                return {indexList:action.data, status: 'LOADING_STATE'}
            }
        case "GET_DETAIL":
            return action.data
        case "GET_USER":
            return action.data
        default:
            return state
    }
}