import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux'
import {Header,Footer} from '../../components';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[]
        };
    }
    render() {
        return (
            <div id="wrapper" className="spacing">
                <Header title="发表主题" leftTo="/" />
                <div className="topic-create">
                    <div className="item">
                        <select name="tab">
                            <option value="">请选择发表类型</option>
                            <option value="share">分享</option>
                            <option value="ask">问答</option>
                            <option value="job">招聘</option>
                        </select>
                    </div>
                    <div className="item">
                        <input type="text" placeholder="标题字数 10 字以上" value="" />
                    </div>
                    <div className="item">
                        <textarea placeholder="内容字数 30 字以上"></textarea>
                    </div>
                    <div className="btn-wrap">
                        <a href="" className="btn">发布</a>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

 
export default App
