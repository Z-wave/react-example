import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux'
import {Header,Footer} from '../../components';

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    signin = () => {
        let {value} = this.refs.accesstoken
        if(!value) return alert('Access Token不能为空');

        axios.post('/v1/accesstoken', { accesstoken:value })
        .then((res) => {
            if(res.data.success){
                window.localStorage.setItem('accessToken',value)
                window.localStorage.setItem('user',res.data.loginname)
                window.localStorage.setItem('userId',res.data.id)

                this.props.history.push('/user/'+res.data.loginname)
            }
        }).catch((error) => {
            alert('错误的accessToken');
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
