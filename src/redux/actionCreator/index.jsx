import axios from 'axios'

 export default {
    getIndexData:(data) => {
        return async (dispatch,getstate) => {
            try {
                const res = await axios.get('/v1/topics',{params:data})

                if(res.status == 200){
                    dispatch({
                        type: "GET_INDEXLIST",
                        data: res.data.data,
                        more: data.more
                    });
                }
            }catch(e){
                throw new Error('axios failure')
            }
        }
    },
    getDetailData:(id) => {
        return async (dispatch,getstate) => {
            try {
                const res = await axios.get('/v1/topic/'+id)
                
                if(res.status == 200){
                    dispatch({
                        type: "GET_DETAIL",
                        data: res.data.data
                    });
                }
            }catch(e){
                throw new Error('axios failure')
            }
        }
    },
    getUserData:(name) => {
        return async (dispatch,getstate) => {
            try {
                const res = await axios.get('/v1/user/'+name)
                
                if(res.status == 200){
                    dispatch({
                        type: "GET_USER",
                        data: res.data.data
                    });
                }
            }catch(e){
                throw new Error('axios failure')
            }
        }
    }
 }