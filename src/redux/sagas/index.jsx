import { put, takeEvery, takeLatest, all } from 'redux-saga/effects'
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

function* getTopicData(params) {
    try {
        const res = yield axios.get('/v1/topic/'+params.id)
        
        if(res.status == 200){
            yield put({
                type: "GET_TOPIC",
                data: res.data.data
            });
        }
    }catch(e){
        throw new Error('axios failure')
    }
}

function* getUserData(params) {
    try {
        const res = yield axios.get('/v1/user/'+params.name)
        
        if(res.status == 200){
            yield put({
                type: "GET_USER",
                data: res.data.data
            });
        }
    }catch(e){
        throw new Error('axios failure')
    }
}

function* getMessagesData() {
    try {
        const res = yield axios.get(`/v1/messages?accesstoken=${localStorage.getItem('accessToken')}`)
        
        if(res.status == 200){
            yield put({
                type: "GET_MESSAGES",
                data: res.data.data
            });
        }
    }catch(e){
        throw new Error('axios failure')
    }
}

export default function* appSaga() {
    yield all([
        takeEvery("GET_LIST_START", getIndexData),
        takeEvery("GET_TOPIC_START", getTopicData),
        takeEvery("GET_USER_START", getUserData),
        takeEvery("GET_MESSAGES_START", getMessagesData)
    ])
}