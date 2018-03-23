import { put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'

function* getIndexData(params) {
    console.log(params);
    try {
        const res = yield axios.get('/v1/topics',{params:params})
        
        if(res.status == 200){
            yield put({
                type: "GET_INDEXLIST",
                data: res.data.data
            });
        }
    }catch(e){
        throw new Error('axios failure')
    }

}

export default function* fecthData() {
    yield takeEvery("GET_INDEXLIST", getIndexData)
}