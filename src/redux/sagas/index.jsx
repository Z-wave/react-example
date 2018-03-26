import { put, takeEvery, takeLatest } from 'redux-saga/effects'
import axios from 'axios'

function* getIndexData(params) {
    try {
        const res = yield axios.get('/v1/topics',{params:params.params})
        
        if(res.status == 200){
            yield put({
                type: "GET_INDEXLIST",
                data: res.data.data,
                params:params.params
            });
        }
    }catch(e){
        throw new Error('axios failure')
    }

}

function* getDetailData(params) {
    try {
        const res = yield axios.get('/v1/topic/'+params.id)
        
        if(res.status == 200){
            yield put({
                type: "GET_DETAIL",
                data: res.data.data
            });
        }
    }catch(e){
        throw new Error('axios failure')
    }

}

export default function* appSaga() {
    yield [
        takeEvery("GET_START", getIndexData),
        takeEvery("GET_DETAIL_START", getDetailData)
    ]
}