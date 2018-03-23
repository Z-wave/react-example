 export default {
    getIndexData: (data) => {
        console.log(11111);
        return {
            type: 'GET_INDEXLIST',
            params:data
        }
    },
    getDetailData: (id) => {
        return {
            type: 'GET_DETAIL',
            id: id
        }
    },
    getUserData: (name) => {
        return {
            type: 'GET_USER',
            name: name
        }        
    }
}