import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux'
import {Header,Footer,Profile} from '../../components';
import ReplyList from "./replies";

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        let { dispatch,match } = this.props

        dispatch({type: 'GET_TOPIC_START',id:match.params.id});
    }
    
    submit = (id) => {
        let { dispatch,match } = this.props
        let {content} = this.refs
        
        if(!content.value) return alert('请输入内容');

        axios.post(`/v1/topic/${id}/replies`,{
            accesstoken: localStorage.getItem('accessToken'),
            content    : content.value
        }).then((res) => {
            dispatch({type: 'GET_TOPIC_START',id:match.params.id});
            content.value = ''
        })
    }

    render() {
        let {topic} = this.props
        let {author = {},replies = []} = topic

        return (
            <div id="wrapper" className="spacing">
            <Header title="主题详情" leftTo="/" />
            <div className="artcle p10">
                <Profile 
                    author={author} 
                    create_at={topic.create_at}
                    reply_count={topic.reply_count}
                    visit_count={topic.visit_count}
                    last_reply_at={topic.last_reply_at}
                />
            </div>
            <h1 className="fs20 bg-gray p10">{topic.title}</h1>
            <div className="p10" dangerouslySetInnerHTML={{__html:topic.content}}></div>
            <div className="box box-items reply_count">
                <div className="color-block"></div>
                <div className="flex-1 ml10">
                    共<b className="ml5 mr5 color">{topic.reply_count}</b>条回复
                </div>
            </div>
            <ul className="re-list">
                <ReplyList {...this.props} replies = {replies}></ReplyList>
            </ul>
            {
                !localStorage.getItem('accessToken') ? 
                <p className="text-center p40">
                    您还未登录，请先<NavLink to="/signin" className="color">登录</NavLink>
                </p>
                : 
                <div className="replies p10">
                    <textarea id="" cols="30" rows="5" ref="content" placeholder="请输入回复内容"></textarea>
                    <p className="pl70 pr70">
                        <a className="btn mt10" onClick={() => {this.submit(topic.id)}}>提交</a>
                    </p>
                </div>
            }
            <Footer />
            </div>
        )
    }
}

export default connect(state => state)(App);
