import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux'
import {Header,Footer} from '../../components';
import actionCreator from '../../redux/actionCreator'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[]
        };
    }

    componentDidMount(){
        let { dispatch,match } = this.props
        
        dispatch(actionCreator.getUserData(match.params.name));
    }

    signOut = () => {
        let {history} = this.props

        window.localStorage.removeItem('user')
        history.push('/signin')
    }

    render() {
        let {user,recent_replies=[],recent_topics=[]} = this.props

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
                        <div className="flex-1 active">主题</div>
                        <div className="flex-1">回复</div>
                    </div>
                    <ul>
                        <li className="p10 border-bottom">
                            <a className="box box-items">
                                <div className="flex-1 fs14 single-line">测试请发到客户端测试专区，违规影响用户的，直接封号</div>
                                <div className="ml10 color-6">5天前</div>
                            </a>
                        </li>
                    </ul>
                <Footer />
            </div>
        );
    }
}

 
export default connect(state => state)(App)
