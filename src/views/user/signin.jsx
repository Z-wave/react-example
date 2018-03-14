import React, { Component } from 'react';
import {Route,BrowserRouter, Switch,NavLink} from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux'
import {Header,Footer} from '../../components/common/index';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[]
        };
    }
    signin = () => {
        let accesstoken = this.refs.accesstoken.value
        if(!accesstoken) return alert('accesstoken不能为空');

        axios.post('/v1/accesstoken', { accesstoken })
        .then((res) => {
            console.log(res.status);
        }).catch((error) => {
            console.log(error.status);
        })

    }
    render() {
        return (
            <div id="wrapper" className="spacing">
                <Header title="登录" leftTo="/" />
                <div className="p20 mt40">
                    <input type="text" ref="accesstoken" className="access-token" placeholder="Access Token"/>
                </div>
                <div className="pl70 pr70 mt20">
                    <a className="btn" onClick={this.signin}>登录</a>
                </div>
                <Footer />
            </div>
        );
    }
}

 
export default App
