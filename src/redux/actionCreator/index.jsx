 export default {
    testData: (data) => {
        return {
            type: 'GET_START',
            params:data
        }
    },
    getIndexData: (data) => {
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