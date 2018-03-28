import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux'
import {Header,Footer} from '../../components';

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    submit = () => {
        let {tab,title,content} = this.refs
        
        if(!tab.value) return alert('请选择类型');
        if(!title.value) return alert('请输入标题');
        if(!content.value) return alert('请输入内容');

        axios.post('/v1/topics',{
            accesstoken: localStorage.getItem('accessToken'),
            tab        : tab.value,
            title      : title.value,
            content    : content.value
        }).then((res) => {
            console.log(res);
        })
    }
    render() {
        return (
            <div id="wrapper" className="spacing">
                <Header title="发表主题" leftTo="/" />
                <div className="topic-create">
                    <div className="item">
                        <select name="tab" ref="tab">
                            <option value="">请选择发表类型</option>
                            <option value="share">分享</option>
                            <option value="ask">问答</option>
                            <option value="dev">测试</option>
                        </select>
                    </div>
                    <div className="item">
                        <input type="text" ref="title" placeholder="标题字数 10 字以上" />
                    </div>
                    <div className="item">
                        <textarea placeholder="内容字数 30 字以上" ref="content"></textarea>
                    </div>
                    <div className="btn-wrap">
                        <a onClick={() => {this.submit()}} className="btn">发布</a>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

 
export default App
