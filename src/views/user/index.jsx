import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux'
import {Header,Footer} from '../../components';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index:0
        }
    }

    componentDidMount(){
        let { dispatch,match } = this.props
        
        dispatch({type: 'GET_USER_START',name:match.params.name});
    }

    signOut = () => {
        let {history} = this.props

        window.localStorage.removeItem('accessToken')
        history.push('/signin')
    }

    render() {
        
        let {user} = this.props
        let {recent_topics=[],recent_replies=[]} = user
        let list = this.state.index === 0 ? recent_topics : recent_replies

        return (
            <div id="wrapper" className="spacing">
                <Header title="个人中心" leftTo="/" showSignOut={true} signOut={() => this.signOut()} />
                    <div className="user-index">
                        <div className="pic">
                            <img src={user.avatar_url} alt=""/>
                        </div>
                        <p className="text-center fs18 mt10">{user.loginname}</p>
                        <p className="text-center mt5">
                            <span>积分：{user.score}</span>
                            <span className="ml20">注册于：{formatDate(user.create_at)}</span>
                        </p>
                    </div>
                    <div className="box user-tab">
                        <div className={`flex-1 ${this.state.index === 0 ? 'active' : ''}`} onClick={() => {this.setState({index:0})}}>主题</div>
                        <div className={`flex-1 ${this.state.index === 1 ? 'active' : ''}`} onClick={() => {this.setState({index:1})}}>回复</div>
                    </div>
                    <ul>
                    {
                        list.map((item) => {
                            return (
                                <li className="p10 border-bottom" key={item.id}>
                                    <NavLink to={`/detail/${item.id}`} className="box box-items">
                                        <div className="flex-1 fs14 single-line">{item.title}</div>
                                        <div className="ml10 color-6">{formatDate(item.last_reply_at)}</div>
                                    </NavLink>
                                </li>
                            )
                        })
                    }
                    </ul>
                <Footer />
            </div>
        );
    }
}

 
export default connect(state => state)(App)
