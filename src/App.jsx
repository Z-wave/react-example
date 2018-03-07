import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router';
import axios from 'axios';
import { Provider } from 'react-redux'
import store from './store/index.jsx'

import './components/common/common';
import './assets/scss/common.scss';

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
