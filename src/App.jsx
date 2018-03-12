import React from 'react';
import {createStore, applyMiddleware} from "redux";
import ReactDOM from 'react-dom';
import Router from './router';
import axios from 'axios';
import { Provider } from 'react-redux'
import thunk from "redux-thunk";
import Reducers from "./store/reducers"

import './components/common/common';
import './assets/scss/common.scss';

const store = createStore(Reducers,applyMiddleware(thunk));

axios.interceptors.response.use(function (res) {

    // res.config.transformRequest = [function (data) {
    //     let ret = ''
    //     for (let it in data) {
    //       ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
    //     }
    //     return ret
    // }];

    return res
}, function (error) {

});

ReactDOM.render((
    <Provider store = {store}>
        <Router />
    </Provider>
), document.getElementById('viewport'));
