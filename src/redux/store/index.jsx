import { createStore, applyMiddleware } from 'redux'
import reducer from '../reducers'
import createSagaMiddleware from 'redux-saga'
import appSaga from '../sagas'


const sagaMiddleware = createSagaMiddleware()

export default createStore(reducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(appSaga)
