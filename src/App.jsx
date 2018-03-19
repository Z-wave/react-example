import React from 'react';
import {createStore, applyMiddleware} from "redux";
import ReactDOM from 'react-dom';
import Router from './router';
import axios from 'axios';
import { Provider } from 'react-redux'
import store from './store/store'

import './components/common/common';
import './assets/scss/common.scss';


axios.interceptors.response.use(function (res) {
    return res
}, function (error) {
    console.log('error');
});

ReactDOM.render((
    <Provider store = {store}>
        <Router />
    </Provider>
), document.getElementById('viewport'));
